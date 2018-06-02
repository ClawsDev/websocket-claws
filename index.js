const express = require('express')
const socket = require('socket.io')

//app setup
const app = express();
const server = app.listen(5000, function(){
    console.log('Rodando na porta 5000...')
});




//static files

app.use(express.static('public'))

//socket setup
const io = socket(server)

io.on('connection', function(socket){
    console.log('Conexao socket realizada...',socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    });

    socket.on('escrevendo...', function(data){
        socket.broadcast.emit('escrevendo', data)
    })
});