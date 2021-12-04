require('dotenv').config();
const express = require('express')
const app = express();
const passport = require('passport')

require('./startup/module.js')(app)
require('./startup/dbconfig.js')();
require('./passport-config')(passport);
require('./startup/routes.js')(app);

PORT = process.env.PORT || 4000
app.listen(PORT, (err) => {
    if(err) return console.log("Could not connect to server")
    console.log("You are now connected on port 4000")
})

