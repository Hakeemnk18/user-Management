const express = require('express')
const cors = require('cors')
const app = express()
const db = require("./config/db")
db()

const PORT = 5000

app.use(express.json())
app.use(cors())

app.get('/api',(req,res)=>{
    try {
        res.status(200).json({message : "hello welcome backend"})
    } catch (error) {
        res.status(500).json({message:"server error"})
    }
})

app.listen(PORT,()=> console.log("app running on port "+PORT))