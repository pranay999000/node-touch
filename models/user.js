const mongoose = require('mongoose')
const schema = mongoose.Schema

let UserSchema = new schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isOver21: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('user', UserSchema)