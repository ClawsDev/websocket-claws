//conexao

const socket = io.connect('http://localhost:5000')

//query
const message = document.getElementById('message')
      handle = document.getElementById('handle')
      btn = document.getElementById('send')
      output = document.getElementById('output')
      feedback = document.getElementById('feedback')


//emit events

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

message.addEventListener('keypress', function(){
    socket.emit('escrevendo',  handle.value)
})

//list events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ' diz: </strong>' +  data.message + '</p>'
})

socket.on('escrevendo', function(data){
    feedback.innerHTML = '<p><em>'+ data + 'esta escrevendo uma mensagem... </em> </p>' 
})