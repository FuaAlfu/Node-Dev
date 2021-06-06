require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//register view engine
app.set('view engine', 'ejs');
//app.set('views', 'myViews');

//middleware  --> app.use()
app.use(express.json());

//routes
app.get('/', (req,res) =>{
   // res.send('<p>2021 --- home page</p>');
  // res.sendFile('./views/index.html', {root: __dirname});
  const blogs = [
  {title: 'gogo toto', snippet: 'loremoremoremoremoremoremoremorem'},
  {title: 'hoho dodo', snippet: 'loremoremoremoremoremoremoremorem'},
  {title: 'zozo hoho', snippet: 'loremoremoremoremoremoremoremorem'},
  ];
  res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req,res) =>{
    // res.send('<p>2021 --- about page</p>');
   // res.sendFile('./views/about.html', {root: __dirname});
   res.render('about', {title: 'About'});
 });

 app.get('/blogs/create', (req,res) =>{
     res.render('create', {title: 'Create a new Blog'});
 })

 //redirescts
 //app.get('/about-us',(req,res) =>{
 //    res.redirect('/about');
 //});

 //middleware  --> app.use()
 app.use((req, res) => {  //404 page
    //res.status(404).sendFile('./views/404.html', {root: __dirname})
    res.status(404).render('404', {title: '404'});
});

//fire up our app
app.listen(
    port,
    () => console.log(`servering on http://localhost:${port}`)
)