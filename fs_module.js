const fs = require("fs");
// // Create File
// fs.writeFile("file1.txt","Hello World!\n",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File Created Successfully");
// })

// // Append File
// fs.appendFile("file1.txt", "How's you?", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Data Added");
// })

// // Rename File
// fs.rename("file1.txt", "First_file.txt", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File is renamed");
// })


// Copy File
// fs.copyFile("First_file.txt" , "copy1.txt", (err)=>{
//     if(err){
//         console.log(err.messeage);
//         return;
//     }
//     console.log("File is Copied");
// })

// // Delete a File
// fs.unlink("copy1.txt", (err)=>{
//     if(err){
//         console.log(err.messeage);
//         return;
//     }
//     console.log("File has been Deleted");
// })

// Delete a empty 
// fs.rmdir("./folder1", (err)=>{
// if(err){
//         console.log(err.messeage);
//         return;
//     }
//     console.log("Folder has been Deleted");
// })


// Delete a folder with Content
// fs.rm("./folder1", {recursive: true}, (err)=>{
//     if(err){
//         console.log(err.messeage);
//         return;
//     }
//     console.log("Folder has been Deleted");
// })

// Read File
fs.readFile("first_file.txt", "utf8", (err, data)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("File had been read");
    console.log(data);
})