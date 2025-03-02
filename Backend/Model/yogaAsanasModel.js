const mongoose=require("mongoose")

const asanaSchema=mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,require:true},
    description:{type:String,required:true},
    duration:{type:String,required:true}

},{versionKey:false})

const yogaAsana=mongoose.model("yogaAsana",asanaSchema)



module.exports={yogaAsana} 