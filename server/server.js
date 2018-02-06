const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('welcome', generateMessage('Admin', 'Welcome to the chat App'));
    
    socket.broadcast.emit('newJoin', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message) => {
        console.log('New message received', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })

    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
})