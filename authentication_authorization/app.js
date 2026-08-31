const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(cookieParser());

// app.get('/', (req, res)=>{
//     res.cookie("name", "Himanshi");
//     res.send("Done");
// })



// app.get('/', (req,res)=>{
//     bcrypt.genSalt(10, function(err, salt){
//         bcrypt.hash("himanshi", salt, function(err, hash){
//             console.log(hash);
//             res.send("hey");
//         })
//     })
// })



app.get('/', (req,res)=>{
    bcrypt.compare("himanshi", "$2b$10$gWJzFO9mmZA9zygrNIoO8.oE2oSn2/nBcsKJJEjirIwOvyuXYABs6", (err,result)=>{
        console.log(result);
    })
})

app.get('/read', (req,res)=>{
    res.send("Read");
    console.log(req.cookies);
})


app.listen(3000, (err)=>{
    console.log("Server has started");
})