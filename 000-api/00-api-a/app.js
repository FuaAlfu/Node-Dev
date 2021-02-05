require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/",(req,res) => {
    res.send('working!');
})

app.listen(port,() =>{
    console.log('servering on port 5000...');
})