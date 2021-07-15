package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/shafinhasnat/golang-restapi/controllers"
)

func Routes(app *fiber.App) {
	app.Get("/", controllers.Hello)
	app.Post("/register", controllers.Register)
	app.Post("/login", controllers.Login)
	app.Get("/user", controllers.User)
	app.Get("/logout", controllers.Logout)
}
