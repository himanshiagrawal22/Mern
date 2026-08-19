const express = require('express');
const app = express();


const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req,res)=>{
    res.send("Hi");
})

//Create

app.get('/create', async (req,res)=>{
    let usercreated = await userModel.create({
        name : "Himanshi",
        email : "himanshiagrawal222@gmail.com",
        username : "himanshi" 
    })
    res.send(usercreated);
})

app.get('/create-a', async (req,res)=>{
    let usercreated = await userModel.create({
        name : "Adity",
        email : "adity222@gmail.com",
        username : "adity" 
    })
    res.send(usercreated);
})

// Update
app.get('/update', async (req,res)=>{
    let updateuser = await userModel.findOneAndUpdate({username: "himanshi"}, {name: "Rimjhim"}, {new: true})
    res.send(updateuser);
})

//Read all user
app.get('/read', async (req,res)=>{
    let readuser = await userModel.find();
    res.send(readuser);
})


//Read a single user
app.get('/read-one', async (req,res)=>{
    let readuser = await userModel.find({username: "adity"});
    res.send(readuser);
})


// Delete

app.get('/delete', async (Req,res)=>{
    let deleteuser = await userModel.findOneAndDelete({username: "himanshi"})
    res.send(deleteuser);
})




app.listen(3000, (err,data)=>{
    console.log("server running");
})