// Import required modules
const express = require("express")
const burger = require("../models/burger")

// Set up Express router
const router = express.Router()

// Route Definitions

// GET route for index HTML page
router.get("/", (req, res) => {
    burger.getAll(data => {
        var burgerListObj = {
             burgers: data
        }
        console.log(burgerListObj)
        res.render("index", burgerListObj)
    })
})

// POST API route for creating a new burger
router.post("/api/burgers", (req, res) => {

})

// PUT API route for changing the 'devoured' status of a burger
router.put("/api/burgers/:id", (req, res) => {

})

// Export router
module.exports = router
