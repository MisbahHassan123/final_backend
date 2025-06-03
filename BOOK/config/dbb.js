const mongoose=require("mongoose")


const connectDB=async ()=>{
    mongoose.connect("mongodb://localhost:27017/BlogApp").then(()=>{
        console.log("Database has been connected")
    })
}


module.exports=connectDB