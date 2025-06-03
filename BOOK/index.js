const express=require("express")
const app=express()
const env=require("dotenv").config()
const port=process.env.PORT || 5000
const connectDB=require("./config/dbb")
const postRoutes=require("./routes/postRoutes")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDB()

app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

app.listen(port,(req,res)=>{
    console.log("Server is running on " + port)
})