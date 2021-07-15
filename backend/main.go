package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/shafinhasnat/golang-restapi/database"
	"github.com/shafinhasnat/golang-restapi/routes"
)

func main() {
	database.ConnectDB()
	app := fiber.New()

	routes.Routes(app)
	app.Listen(":10000")

}
