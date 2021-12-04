const express = require('express')
const router = express.Router()


router.get('/', checkAuthorization, async (req, res) => {
    const result = await req.user
    res.render('index.ejs', data = { name: result.name})
})


function checkAuthorization(req, res, next) {
    if(req.isAuthenticated()) return next();
    else res.redirect('/login')
}

module.exports = router