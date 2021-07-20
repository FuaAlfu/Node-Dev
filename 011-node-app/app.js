if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
    }
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.static('public'));

const api_key = process.env.API_KEY;
//routes
app.get('/dinoname', async (req,res) => {
   const fecthing = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
        },
    }
  );

  const dinoNameRes = await fecthing.json();
  console.log(dinoNameRes);
  res.json(dinoNameRes);
});

app.get('/dinoimage', async (req,res) => {
    const fecthing = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=50", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        },
    });
 
   const dinoImageRes = await fecthing.json();
   console.log(dinoImageRes);
   res.json(dinoImageRes);
 });

app.listen(port,() =>{
    console.log(`servin on ${port}`)
})