import express from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();


app.get("/health" , (req , res)=>{
    res.send("OK")
})


app.listen(process.env.PORT , ()=>{
    console.log(`You application is runningo on http://localhost:${process.env.PORT}`)
})

