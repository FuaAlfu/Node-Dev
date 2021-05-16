const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
    console.log('request made');
    console.log(req.url, req.method);

    //send info to a page
    //set a header content type
    //res.setHeader('Content-Type', 'text/plain');
   // res.write('serving well, glad to see you here !');
   // res.end();

   //read file :: basic routers
   res.setHeader('Content-Type', 'text/html');
   let path = './views/';
   switch(req.url){
       case '/':
           path += 'index.html';
           break;
       case '/about':
        path += 'about.html';
        break;
        default:
            path += '404.html';
            break;
   }
   //fs.readFile('./views/index.html', (err, data) //old
   fs.readFile(path, (err, data) => {
       if(err){
           console.log(err);
           res.end();
       }else{
          // res.write(data);
           res.end(data);
       }
   })
});

const port = 3000

server.listen(port,'localhost', () => {
    console.log('listning for request on por 3000');
})