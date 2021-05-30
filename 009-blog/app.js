require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

//routes
app.get('/', (req,res) =>{
   // res.send('<p>2021 --- home page</p>');
   res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req,res) =>{
    // res.send('<p>2021 --- about page</p>');
    res.sendFile('./views/about.html', {root: __dirname});
 });


//fire up our app
app.listen(
    port,
    () => console.log(`servering on http://localhost:${port}`)
)