const LocalStratergy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const User = require('./module/user.js');
const mongoose = require('mongoose')

module.exports = function (passport) {
    const authenticateUser = async ( email, password, done) => {
        const user = await User.findOne({ email: email})
        
        if(user == null){
            return done(null, false, {message: "User not found"})
        }
        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            }else{
                return done(null, false, {message: "Incorrect Password"})
            }
        }catch(e){
            return done(e)
        }

    }
    passport.use(new LocalStratergy({ usernameField: 'email'}, authenticateUser) )
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => done(null, getUserById(id)))
}

async function getUserById(id) {
    const result = await User.findOne({ _id : id})
    return result
}

