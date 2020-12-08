const User = require('../model/User');
const jwt = require('jsonwebtoken');
//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { name: '', email: '', password: '' } //send as json to the user..

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }
    //validation errors
    if (err.message.includes('user validation failed')) { //user validation failed --> from terminal
        //  console.log(Object.values(err.errors)); //to extract values from error object ::object.values take the val.. not keys
        //Object.values(err.errors).forEach(error => {  ::old
        Object.values(err.errors).forEach(({ properties }) => { //destructure
            //  console.log(error.properties);
            // error[properties.path] = 'some vale';
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

//3 days, day,min,sec
const maxAge = 3* 24 * 60 * 60
//creating tokens jwt
const createToken = (id) =>{
    //passing the payload in sign func : first arg is id the snd is secret, the third arg is option
    return jwt.sign({id}, 'fua.s special secret',{
        //its like a cookie , determind the life spine )
        expiresIn: maxAge
    });
}

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.signup_post = async(req, res) => {
    const { name, email, password } = req.body;
    //for test:
    // console.log(name, email, password);
    // res.send('new sign up');

    //here .. create a new user
    try {
        const user = await User.create({ name, email, password }) //builtin func to create user on our database :: wait till fill the promise
        const token = createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true, maxAge: maxAge * 1000}) //message , *1000 to make count till 3 days
        res.status(201).json({user:user._id}); //201 means success :: send user object
    } catch (err) {
        // console.log(err); //old
        const errors = handleErrors(err);
        //  res.status(400).send('error, rightd khere ..user not created'); //400 means error
        res.status(400).json({ errors })
    }
}

module.exports.login_post = async(req, res) => {
    //reciving object from json ::middleware
    // console.log(req.body); //test
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.send('user login');
}