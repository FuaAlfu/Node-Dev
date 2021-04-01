const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const port = 8081;

socket.on('message', (msg, info) =>{
    console.log(`server got: ${msg} from ${info.address}: ${info.port}`);
});

socket.bind(port);