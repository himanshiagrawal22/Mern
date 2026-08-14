const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended :true}));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/form.html");
});

app.post("/submit", (req, res)=>{
    const { username, email } = req.body;
    console.log(username);
    console.log(email);
    res.send(`Hello ${username}, your email is ${email}`);
});

app.listen(3000, ()=>{
    console.log("Server runing on port 3000");
});