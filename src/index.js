// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectdDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path:"./env"
})
app.get("/",(req, res) => {
    res.send("hello server is 8000")
})
connectdDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server Is Running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!",err)
})

//white list

/*
import express from "express";
const app = express()
( async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
       app.on("error",(error) => {
        console.log("ERROR",error);
        throw error
       })
       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`); 
       })
    }catch(error) {
        console.error("ERROR",error)
        throw err
    }
})()
    */