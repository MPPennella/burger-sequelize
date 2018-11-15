const connection = require("./connection.js")

const orm = {
    selectAll: function (table, cb) {
        let query = "SELECT * FROM ??;"

        connection.query(query, [table], function(err, result) {
            if (err) {
                throw err
            }
            cb(result)
        })
    },

    insertOne: function (table, cols, values, cb) {
        let query = "INSERT INTO ?? (??) VALUES (?)"

        connection.query(query, [table, cols, values], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    updateOne: function (table, column, value, idCol, idVal, cb) {
        let query = "UPDATE ?? SET ??=? WHERE ??=?"

        connection.query(query, [table, column, value, idCol, idVal], function(err, result) {
            if (err) {
                 throw err;
            }
      
            cb(result);
        });
    }
}

module.exports = orm