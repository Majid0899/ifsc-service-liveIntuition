import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app=express()


app.get("/",(req,res)=>{
    res.send("Welcome to our API")
})

app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${process.env.PORT}`)
})