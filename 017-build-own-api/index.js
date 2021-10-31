const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 8000;

const newspapers = [{
    name: 'thetimes',
    address: 'https://wwww.thetimes.co.uk/environment/climate-change',
    base: ''
},
{
    name: 'theguardian',
    address: 'https://www.theguardian.com/environment/climate-crisis',
    base: ''
},
{
    name: 'telegraph',
    address: 'https://www.telegraph.co.uk/climate-change',
    base: 'https://www.telegraph.co.uk'
}
]

//create an empty array
const articles = [];

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
    .then(response => {
        const html = response.data
        const $ =  cheerio.load(html)

        $('a:contains("climate")',html).each(function (){
           const title = $(this).text()
          const url = $(this).attr('href')

          articles.push({
              title,
              url: newspaper.base + url,
              source: newspaper.name
          })
        })
    })
})

app.get('/', (req,res) =>{
    res.json("hi and welcome")
});

app.get('/news', (req,res) =>{
    res.json(articles)
});

//for a test
//app.get('/news', (req,res) =>{
    // axios.get('https://www.theguardian.com/environment/climate-crisis')
    // .then((response) => {
    //     const html = response.data
    //    // console.log(html);
    //     const $ =  cheerio.load(html)

    //     $('a:contains("climate")',html).each(function (){
    //        const title = $(this).text();
    //        const url = $(this).attr('href')

    //        articles.push({
    //            title,
    //            url
    //        });
    //     })
    //     res.json(articles)
    // }).catch((err) => console.log(err))
//});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));