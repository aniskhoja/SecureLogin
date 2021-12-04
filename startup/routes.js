const login = require('../routes/login')
const register = require('../routes/register')
const home = require('../routes/home')
const logout = require('../routes/logout')


module.exports = function(app) {
    app.use('/login', login)
    app.use('/register', register)
    app.use('/', home)
    app.use('/logout', logout)    
}

