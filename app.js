const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const routes = require('./controllers/routes.js')

const app = express()
const database = 'mongodb://localhost/touch'

app.use(express.json())
app.use('/user', routes)

mongoose.connect(database, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 })


const port = process.env.PORT || 2000
app.listen(port, function(error) {
    if (!error)
        console.log(`listening to port ${port}`)
    else 
        console.log('something went wrong - ' + error)
})