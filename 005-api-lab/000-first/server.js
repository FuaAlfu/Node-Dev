require('dotenv').config();
//const app = require('express')(); //without middleware
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());


app.get('/api', (req,res) =>{
    res.status(200).send({
        data:'some data',
        more: 'more data'
        })
});

app.post('/api/:id', (req,res) => {
    const {id} = req.params;
    const {data} = req.body;
    const {more} = req.body;

    if(!data || !more){
        res.status(418).send({
            message: 'data required'
        })
    }

    res.send({
        api: `your data is: ${data} your more data is: ${more} and ID of ${id}`,
    });
});

//fire up our api
app.listen(
    port,
    () => console.log(`servering on http://localhost:${port}`)
)