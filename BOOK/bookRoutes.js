const {create,getPost,deletePost,update}=require("../controllers/postcontrollers")
const router=require("express").Router()

router.get("/books",getPost)

