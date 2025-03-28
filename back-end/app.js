const express = require('express')
const cors = require('cors')
const app = express()
const methodOverride = require('method-override');
const db = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
db()

const PORT = 5000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/api',userRoutes)
app.use('/api/admin',adminRoutes)

app.listen(PORT,()=> console.log("app running on port "+PORT))