const orm = require("../config/orm")

// Reference for burger table name
const burgerTable = "burgers"

const burger = {
    create(name, status, cb) {
        orm.insertOne(burgerTable, ["burger_name","devoured"], [name, status], res => cb(res) )
    },

    devour(id, cb) {
        orm.updateOne(burgerTable, "devoured", true, "id", id, res => cb(res) )
    },

    getAll(cb) {
        orm.selectAll(burgerTable, res => cb(res) )
    }
}

module.exports = burger
