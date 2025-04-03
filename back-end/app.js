const express = require('express')
const cors = require('cors')
const app = express()
const methodOverride = require('method-override');
const db = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const http = require('http')
const { Server } = require('socket.io'); 
db()

const server = http.createServer(app); // Create an HTTP server with Express
const io = new Server(server, {
    cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] }
});


const PORT = 5000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/api',userRoutes)
app.use('/api/admin',adminRoutes)

//socket io setup
io.on("connection", (socket) => {
    

    // Handle user messages
    socket.on("sendMessage", ({ userId, message, senderId }) => {
        

        // Forward the message to the admin
        io.emit("receiveMessage", { userId, message, senderId });
    });

    // Handle admin replies
    socket.on("sendReply", ({ userId, message }) => {
        

        // Send reply back to the user
        io.emit("receiveReply", { userId, message });
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});

server.listen(PORT, () => console.log("App running on port " + PORT));