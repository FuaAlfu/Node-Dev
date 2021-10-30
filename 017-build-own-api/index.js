const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 8000;

//create an empty array
const articles = [];

app.get('/', (req,res) =>{
    res.json("hi and welcome")
});

app.get('/news', (req,res) =>{
    axios.get('https://www.theguardian.com/environment/climate-crisis')
    .then((response) => {
        const html = response.data
       // console.log(html);
        const $ =  cheerio.load(html)

        $('a:contains("climate")',html).each(function (){
           const title = $(this).text();
           const url = $(this).attr('href')

           articles.push({
               title,
               url
           });
        })
        res.json(articles)
    }).catch((err) => console.log(err))
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));