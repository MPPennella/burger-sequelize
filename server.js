// Import required modules
const express = require("express")
const exphbs = require("express-handlebars")
const db = require("./models")
const routes = require("./routes/burgers_controller")

// Define listening port
const PORT = process.env.PORT || 8080

// Initialize and configure app
const app = express()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"))

// Parse application body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Configure to use handlebars for rendering
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Add route controller
routes(app)

db.sequelize.sync().then(function () {
    // Start server
    app.listen(PORT, function() {
        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
    });
})
