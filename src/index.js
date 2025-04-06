//require("dotenv").config({path: "./.env"}); //1st method to load env variables

import dotenv from "dotenv"; //2nd method to load env variables
dotenv.config({path: "./.env"}); //2nd method to load env variables aur is method ko use karne ke liye hamne package.json main scripts dev main change kiya hai
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants"; iski zaroorat second method main nhin padegi kyunki hamne already connectdb main DB_NAME ko use kiya hai
import connectDB from "./db/index.js";

connectDB()







 
//this is approach 1 to connect to mongodb using mongoose
/*
import express from "express";
const app = express();
;( async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("Error", error );
        throw error
       })


       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("Error:", error)
        throw error
    }
})()
*/
