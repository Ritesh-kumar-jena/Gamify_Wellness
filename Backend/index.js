const express=require("express")
const path=require("path")
const cors=require("cors")
const { connection } = require("./db")
const { userRoute } = require("./Controller/userRoutes")
const { asanasRoute } = require("./Controller/yogaAsanasRoutes")
const dotenv=require("dotenv").config()
const port=process.env.port

const app=express()

app.use(cors())

app.get("/",(req,res)=>{
try {
    res.status(200).send("wellcome to Gamify Welliness app")
} catch (error) {
    res.status(400).send(error)
}
})

app.use(express.json())
app.use("/users",userRoute)
app.use("/yoga",asanasRoute)


app.listen(port,async()=>{
     try {
        await connection
        console.log(`server is running on port:-${port} and connect to the Gamify_wellness database`)
     } catch (error) {
        console.log(error)
     }
})