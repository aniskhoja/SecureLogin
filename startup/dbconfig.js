const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect('mongodb://localhost/login')
        .then(() => console.log("Connected sucessfully to mongodb"))
        .catch((e) => console.log("could not connect to mongodb server"))
}