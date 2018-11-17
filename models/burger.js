const orm = require("../config/orm")

// Reference for burger table name
const burgerTable = "burgers"

const burger = {
    // Create uneaten burger
    create(name, cb) {
        orm.insertOne(burgerTable, ["burger_name","devoured"], [name, false], res => cb(res) )
    },

    // Devour a burger
    devour(id, cb) {
        orm.updateOne(burgerTable, "devoured", true, "id", id, res => cb(res) )
    },

    // Get info for all burgers
    getAll(cb) {
        orm.selectAll(burgerTable, res => cb(res) )
    }
}

module.exports = burger
