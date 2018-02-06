var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
    socket.emit('createMessage', {
        from: 'Josh',
        text: 'Hey dude'
    });
    

    socket.on('newMessage', function(newMessage) {
        console.log('New Message', newMessage);
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});
