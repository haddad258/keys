const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const {keyring } = require('./routes/keyring');
const{ allorders} = require('./routes/allorders')



const port = 2000;



// configure middleware
app.set('port', process.env.port || port); 
app.set('views', __dirname + '/views'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(fileUpload());
app.use( express.static( "views" ) );

app.get('/:id',keyring)
app.get('/allorders/key',allorders)


// set the app to listen on the port
app.listen(port, () => {
 //   console.log(``);
});