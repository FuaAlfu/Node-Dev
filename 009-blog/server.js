const http = require('http');
const server = http.createServer((req,res) =>{
    console.log('request made');
    console.log(req.url, req.method);

    //set a header content type
    res.setHeader('Content-Type', 'text/plain');
    res.write('serving well, glad to see you here !');
    res.end();
});

const port = 3000

server.listen(port,'localhost', () => {
    console.log('listning for request on por 3000');
})