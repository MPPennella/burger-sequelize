// Import required modules
const express = require("express")
const burger = require("../models/burger")

// Set up Express router
const router = express.Router()

// Route Definitions
router.get("/", (req, res) => {
    burger.getAll(data => {
        var burgerListObj = {
             burgers: data
        }
        console.log(burgerListObj)
        res.render("index", burgerListObj)
    })
})

// Export router
module.exports = router
