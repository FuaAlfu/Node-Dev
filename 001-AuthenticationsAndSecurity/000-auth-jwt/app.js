//jshint esversion:6
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.json()); //handle adding objects
app.use(cookieParser()) //invoking it

// view engine
app.set('view engine', 'ejs');

// database connection
// const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
// const dbURI = 'mongodb+srv://fua:Tiptip3972@cluster0.y6ckn.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(port), () => { console.log("servering on port 3000"); })
    .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes); //placing all routes here by this sngle line ^^

//cookies


//cookies :: examples
// app.get('/set-cookies', (req, res) => {
//     // res.setHeader('set-cookie', 'newUser=true')

//     //will do the same thing
//     res.cookie('newUser', false);
//     res.cookie('isHuman', true, { maxAge: 1000 * 60 * 60 * 24, secure: true }) //another cookie, with third arg (option arg) :: secure means the cookie will be send only when we have https
//     res.cookie('isDoboTu', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }) //not be access by js (frontend)

//     //when we send respond to browser, will send the cookie along with it
//     res.send('you got the cookie')
// });
// app.get('/read-cookies', (req, res) => {
//     const cookies = req.cookies;
//     console.log(cookies);

//     //send response
//     res.json(cookies);
// });