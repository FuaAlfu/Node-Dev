const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const firebase = require('./firebase/data');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//for test
app.get('/', (req,res) => {
    res.send('testing')
})

app.post('/data/', (req,res) =>{
    console.log(req.body);
    firebase.saveData(req.body, (err,data) =>{
        //return result
        res.send(data);
    });
});

app.listen(port, (err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log("servering at localhost:3000");
    }
})