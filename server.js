"user strict"

const express = require('express');
const path= require('path');
const app = express();


app.get('/', function(req,res){
    res.sendFile('<html><body><h1>Hello World</h1></body></html>')
})
app.listen(8080);
console.log('server started at http://localhost:8080');