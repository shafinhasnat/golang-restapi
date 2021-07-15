package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/shafinhasnat/golang-restapi/database"
	"github.com/shafinhasnat/golang-restapi/routes"
)

func main() {
	database.ConnectDB()
	app := fiber.New()

	app.Use(cors.New())
	routes.Routes(app)
	app.Listen(":10000")

}
