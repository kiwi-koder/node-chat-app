var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
    
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(newMessage) {
    console.log('New Message', newMessage);

    var li = $('<li></li>');
    li.text(`${newMessage.from}: ${newMessage.text}`);

    $('#messages').append(li);
});

socket.on('welcome', function(welcome) {
    console.log('Welcome', welcome);
});

socket.on('newJoin', function(newJoin) {
    console.log('New Join', newJoin);
})

socket.emit('createMessage', {
    from: 'Frank',
    text: 'Hi!'
}, function(data) {
    console.log(data);
});

$('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function() {

    });
});