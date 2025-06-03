const Post=require("../model/post")


const create=async(req,res)=>{
    const {title,content}=req.body

    if(!title||!content){
        res.json("please fill all information")
    }

    const book=new Book({title,content});

    await book.save()

    res.json(book)
}


const getBook=async (req,res)=>{
    const books=await Book.find()

    if(!books|| books.length ==0){
        return res.json("Book is not availale")
    }

    res.json(books)
}

const deleteBook=async (req,res)=>{
    const {id}=req.params

    const resp=await Book.findByIdAndDelete(id)
    if(!resp){
       return  res.json("Not found")
    }else{
        return res.json("Success")
    }
}

const update=async(req,res)=>{
    const {id}=req.params
    const {content}=req.body

    const resp=await Book.findByIdAndUpdate(id,{content},{new:true})

     if(!resp){
       return res.json("Not found")
    }else{
        return res.json("Success")
    }
    
}

module.exports={
    create,getBook,update,deleteBook
}

