package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/shafinhasnat/golang-restapi/database"
	"github.com/shafinhasnat/golang-restapi/models"
	"golang.org/x/crypto/bcrypt"
)

func Hello(c *fiber.Ctx) error {
	return c.SendString("Hello world lpaos")
}
func Register(c *fiber.Ctx) error {
	var data map[string]string
	err := c.BodyParser(&data)
	if err != nil {
		return err
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	userArr := []string{
		data["name"],
		data["email"],
		string(password),
	}
	fmt.Println(userArr)
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: string(password),
	}
	database.DB.Create(&user)
	return c.JSON(user)
}

func Login(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}
	var user models.User
	database.DB.Where("email = ?", data["email"]).First(&user)
	fmt.Println(user)
	if user.Id == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "user not found",
		})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(data["password"])); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "incorrect password",
		})
	}
	return c.JSON(user)
}
