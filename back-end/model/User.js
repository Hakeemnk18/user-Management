const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type : String,
        required: [true, 'Please enter an email'],
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User