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
    },
    role:{
        type:String,
        enum:["admin","user"]
    },
    imgURL:{
        type:String
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User