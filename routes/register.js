const express = require('express')
const router = express.Router()
const bcrypt =  require('bcrypt')
const User = require('../module/user')


router.get('/', (req, res) => {
    res.render('register.ejs')
})

router.post('/', async (req, res) => {
    try{
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })
        const result = await user.save()
        res.redirect('/login')

    }catch(err) {
        console.log(err)
        res.redirect('/register')
    }
})

module.exports = router