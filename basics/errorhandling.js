const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log("middleware runs");
    next();
});

app.get('/', function(req, res, next){
    return next(new Error("something broke!"))
})

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).send("Something went wrong");
}) 

app.listen(3000);