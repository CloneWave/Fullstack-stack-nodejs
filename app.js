//API for book reading/writing web
require("dotenv").config()
const express=require("express");
const { books } = require("./database/connection");
const app=express();
require("./database/connection")
app.use(express.json())
//Routes

app.get("/books",async (req,res)=>{
//Logic for reading book
    const datas=await books.findAll()
    res.json({
        message:"Books fetched successfully.",
        datas
    })
})

app.post("/books",async (req,res)=>{
//logic for adding book
    const {bookName,bookPrice,bookAuthor,bookGenre}=req.body
    await books.create(
        {
            bookName,
            bookPrice,
            bookAuthor,
            bookGenre
        }
    )
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

