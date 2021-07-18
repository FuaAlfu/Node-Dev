require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.static('public'));


//routes
app.get('/dinoname', async (req,res) => {
   const fecthing = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.API_KEY,
            "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
        },
    }
  );

  const dinoNameRes = await fecthing.json();
  console.log(dinoNameRes);
  res.json(dinoNameRes);
});

app.get('/dinoimage', async (req,res) => {
    const fecthing = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.API_IMG,
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