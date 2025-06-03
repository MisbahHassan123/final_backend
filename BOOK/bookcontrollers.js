const Post=require("../model/post")


const create=async(req,res)=>{
    const {title,content}=req.body

    if(!title||!content){
        res.json("please fill all information")
    }

    const post=new Post({title,content});

    await post.save()

    res.json(post)
}


const getPost=async (req,res)=>{
    const posts=await Post.find()

    if(!posts|| posts.length ==0){
        return res.json("Post does not availale")
    }

    res.json(posts)
}

const deletePost=async (req,res)=>{
    const {id}=req.params

    const resp=await Post.findByIdAndDelete(id)
    if(!resp){
       return  res.json("Not found")
    }else{
        return res.json("Success")
    }
}

const update=async(req,res)=>{
    const {id}=req.params
    const {content}=req.body

    const resp=await Post.findByIdAndUpdate(id,{content},{new:true})

     if(!resp){
       return res.json("Not found")
    }else{
        return res.json("Success")
    }
    
}

module.exports={
    create,getPost,update,deletePost
}

