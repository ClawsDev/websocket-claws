//conexao

const socket = io.connect('http://localhost:5000')

//query
const message = document.getElementById('message')
      handle = document.getElementById('handle')
      btn = document.getElementById('send')
      output = document.getElementById('output')



      document.addEventListener("DOMContentLoaded", function(mouseover) {
        console.log(data);
      });
//emit events

btn.addEventListener('click', function(){
    console.log(btn)
    socket.emit('chat', {
        messsage: message.value,
        handle: handle.value
    })
})

//list events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' +  data.message + '</p>'
})