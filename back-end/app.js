const express = require('express')
const cors = require('cors')
const app = express()
const db = require("./config/db")
const userRoutes = require('./routes/userRoutes')
db()

const PORT = 5000

app.use(express.json())
app.use(cors())
app.use('/api',userRoutes)

app.listen(PORT,()=> console.log("app running on port "+PORT))