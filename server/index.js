const express = require('express');
const app = express();
const http = require('http')
const { Server } = require("socket.io")
const cors = require('cors')

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

app.use(express.json())

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data)
    })
})

const port = process.env.PORT || 4200;
server.listen(port, () => console.log(`MY SERVER PORT IS: ${port}`))

