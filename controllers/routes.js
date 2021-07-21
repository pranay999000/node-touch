const express = require('express')
const user = require('../models/user.js')

const router = express.Router()

router.get('/', function(req, res) {
    user.find({}).exec((error, users) => {
        if (error) {
            res.send(error)
        } else {
            res.send(users)
        }
    })
})

router.post('/new', function(req, res) {
    let newUser = new user()
    newUser.user_name = req.body.username
    newUser.password = req.body.password
    newUser.isOver21 = req.body.isOver21

    newUser.save(function(error, user) {
        if (error) {
            res.status(404).send(error)
        } else {
            res.send(user)
        }
    })
})

router.put('/update/:id', function(req, res) {
    user.findById(req.params.id, function(error, user) {
        if (error) {
            res.send(error)
        } else {
            user.user_name = req.body.username || user.user_name
            user.password = req.body.password || user.password
            if ('isOver21' in req.body) {
                user.isOver21 = req.body.isOver21
            }
            
            user.save(function(error, user) {
                if (error) {
                    res.send(error)
                } else {
                    res.send(user)
                }
            })
        }
    })
})

router.delete('/delete/:id', function(req, res) {
    user.findByIdAndDelete(req.params.id, function(error, user) {
        if (error) {
            res.send(error)
        } else {
            res.send(user)
        }
    })
})

module.exports = router