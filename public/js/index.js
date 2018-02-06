var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
    
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(newMessage) {
    console.log('New Message', newMessage);
});

socket.on('welcome', function(welcome) {
    console.log('Welcome', welcome);
});

socket.on('newJoin', function(newJoin) {
    console.log('New Join', newJoin);
})
