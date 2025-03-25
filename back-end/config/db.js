const mongoose = require('mongoose')
const env = require('dotenv').config()


const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongo db connected")
    } catch (error) {
        console.log("error in connect db "+error.message)
    }
}

module.exports = connectDb