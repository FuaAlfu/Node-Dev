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
},
{
    name: 'bbc',
    address: 'https://www.bbc.co.uk/news/scince_and_environment',
    base: 'https://www.bbc.co.uk',
},
{
    name: 'es',
    address: 'https://www.standard.co.uk/topic/climate-change',
    base: 'https://www.standard.co.uk',
},
{
    name: 'sun',
    address: 'https://www.thesun.co.uk/topic/climate-change-environment/',
    base: '',
},
{
    name: 'dm',
    address: 'https://www.dailymail.co.uk/news/climate_change_global_warming/index.html',
    base: '',
},
{
    name: 'nyp',
    address: 'https://nypost.com/tag/climate-change',
    base: '',
},
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

app.get('/news/:newspaperId', (req,res) => {  //async (req,res) => {
    //console.log(req.params.newspaperId);  //for testing inside the terminal..
   const newspaperId = req.params.newspaperId
   const newspaperAddress = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].address
   //console.log(newspaperAddress);

   const newspaperBase = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].base

   axios.get(newspaperAddress)
   .then(response => {
       const html = response.data
       const $ =  cheerio.load(html)
       const specificArticles = []
       
       $('a:contains("climate")',html).each(function (){
        const title = $(this).text();
        const url = $(this).attr('href')

        specificArticles.push({
            title,
            url: newspaperBase + url,
            source: newspaperId
        })
       })
       res.json(specificArticles)
   }).catch(err => console.log(err))
})

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