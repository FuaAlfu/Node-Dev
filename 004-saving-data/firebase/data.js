const firebase = require('./config')

module.exports = {
    saveData: (req, callback) => {
        const username = req.username;

        firebase.database().ref('users/'+username).set({
            name: req.username,
            email: req.email
        });
        callback(null,'statuscode:',200,'message:','saved successfuly');
    }
}