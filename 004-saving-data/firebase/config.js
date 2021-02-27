const firebase = require("firebase");

const appConfig = firebase.initializeApp({
    apiKey: "AIzaSyASercC32pHY93osTCTmnidDMEeuttdsf8",
    authDomain: "save-data-node.firebaseapp.com",
    projectId: "save-data-node",
    storageBucket: "save-data-node.appspot.com",
    messagingSenderId: "632276449841",
    appId: "1:632276449841:web:297462b7277cf59483b310",
    measurementId: "G-MSBKV9N5CX"
});

module.exports = appConfig;