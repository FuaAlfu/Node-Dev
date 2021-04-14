require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/',(req,res) => {
    res.send("serving on port 5000")
});

app.listen(port,()=>{
    console.log('serveing on localhost: 5000');
})