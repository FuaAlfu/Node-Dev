import express from "express";
const app = express();
const port = 3000; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "testing.." );
} );

// start the Express server
app.listen( port, () => {
    console.log( `servering at http://localhost:${ port }` );
} );