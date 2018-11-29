// Import required modules
const db = require("../models")

// Route Definitions
module.exports = function(app) {

    // GET route for index HTML page
    app.get("/", (req, res) => {
        db.Burger.findAll({

        }).then(data => {
            var burgerListObj = {
                burgers: data
            }
            console.log(burgerListObj)
            res.render("index", {burgerListObj})
        })
    })

    // GET API route for getting a list of all burgers
    app.get("/api/burgers", (req, res) => {
        db.Burger.getAll(data => {
            console.log(data)
            res.json(data)
        })
    })

    // POST API route for creating a new burger
    app.post("/api/burgers", (req, res) => {
        let name = req.body.name.trim()

        // Make sure there is a name for burger
        if (name) {
            let burgerValues = {
                burger_name: name,
                devoured: false
            }
            db.Burger.create(burgerValues).then( result => {
                console.log(result)
                // Return ID of new entry
                res.json({ id: result.insertId })
            })
        // Otherwise return 400 "Bad Request" status
        } else res.status(400).end()
        
    })

    // PUT API route for setting the status of a burger to 'devoured'
    app.put("/api/burgers/devour/:id", (req, res) => {
        let id = req.params.id
        db.Burger.devour(id, result => {
            console.log(result)
            // If table had changed rows, id was found and status was changed, so return 200 "OK" status
            if (result.changedRows) res.status(200).end()
            // Else table either did not contain id or was already set to devoured, so return 400 "Bad Request" status
            else res.status(400).end()
        })
    })
}
