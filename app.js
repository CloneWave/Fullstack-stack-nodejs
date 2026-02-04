//API for book reading/writing web
const express=require("express");
const app=express();
require("./database/connection")
//Routes

app.get("/books",(req,res)=>{
//Logic for reading book
    res.json({
        message:"Books fetched successfully."
    })
})


app.post("/books",(req,res)=>{
//logic for adding book
    res.json({
        message:"Book added successfully."
    })
})


app.delete("/books/:id",(req,res)=>{
//logic for removing a book
    res.json({
        message:"Book deleted successfully"
    })
})

app.patch("/books/:id",(req,res)=>{
    //logic to update book
    res.json({
        message:"Book updated successfully"
    })
})
app.listen(3000,()=>{
    console.log("THe server is running on port 3000.");
    
})

