const express=require("express")
const mongoose=require("mongoose")
const { yogaAsana } = require("../Model/yogaAsanasModel")
const { auth } = require("../Middleware/auth")


const asanasRoute=express.Router()
asanasRoute.use(auth)

asanasRoute.post("/addyoga",async(req,res)=>{
    try {
        const data=req.body
        const newyoga=new yogaAsana(data)
        await newyoga.save()
        res.status(200).send("yogaAsana add succesfully")

    } catch (error) {
        res.status(400).json(error)
    }
})

asanasRoute.get("/allyoga",async(req,res)=>{
    try {
        const yogaAsanas=await yogaAsana.find()
        res.status(200).send(yogaAsanas)

    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports={asanasRoute}