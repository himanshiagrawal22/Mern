//EJS

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (Req,res)=>{
    res.render("index");
});

//Dynamic routing
app.get('/profile/:name', (req,res)=>{
    res.send(`Welcome,${req.params.name}`);
});

app.get('/author/:name/:age', (req,res)=>{
    res.send(`Welcome, ${req.params.name} of age ${req.params.age}`);
});


app.listen(3000,()=>{
    console.log("server is runing");
});