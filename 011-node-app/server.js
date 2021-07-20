const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
res.send("hi and welcom");
});

app.listen(port,() =>{
    console.log(`servin on ${port}`)
})