const mongoose = require('mongoose');
const { isEmail } = require('validator'); //from validator pkg
const bcrypt = require('bcrypt');

//create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: true,  :: when we want to add custom message like downbelow we type array
        required: [true, 'please inser a name'],
        minlength: [6, 'minimum name length is six characters'], //minmum six characters
        max: 255
    },
    email: {
        type: String,
        required: [true, 'please inser an email'],
        unique: true, //prevent another same email
        lowercase: true,
        //validate: [(val) => {}, 'please inser a valid email'] :: old version
        validate: [isEmail, 'please inser a valid email']
    },
    password: {
        type: String,
        required: [true, 'please inser a password'],
        minlength: [6, 'minimum password length is six characters']
    },
});

//creatings hooks
//fire a func after doc saved to database :: using mongoose middleware ,
//also..we could fire our function either before or after other events
userSchema.post('save', (doc, next) => {
    console.log("new user was created & saved", doc);
    next();
}); //Post func refer to somthing happens like post saving , then fire the func

//fire a func before doc saved to db
userSchema.pre('save', async function(next) {
        //instance of user object inside Auth controler line 42 we create an instance of user object locally
        //if we used arrow func will not have value available for us 
        console.log('user about to be created & saved', this);
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }) //means before saving

// create model :: the name is must be a singler of what we dyfined on our collection database
const User = mongoose.model('user', userSchema);

module.exports = User;