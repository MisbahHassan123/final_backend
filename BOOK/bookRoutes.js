const {create,getPost,deletePost,update}=require("../controllers/postcontrollers")
const router=require("express").Router()

router.get("/books",getBook)
router.get("/books/:id",getBook)

router.post(' /books ',create)

router.delete(" /books/:id",deleteBook)