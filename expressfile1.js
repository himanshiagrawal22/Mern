const express = require('express');
const app = express();

// Create Routes
app.get('/', function(req, res){
    res.send('Hello Himanshi');
})

app.get('/profile', function(req, res){
    res.send("Hello World!");
})
app.listen(3000);
