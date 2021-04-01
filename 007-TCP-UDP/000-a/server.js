const net = require('net');
const port = 9000;

const server = net.createServer(socket =>{
    socket.write('yo')
    socket.on('data', data =>{
        console.log(data.tostring());
    })
})

server.Listen(port)