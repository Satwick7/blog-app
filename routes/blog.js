const express = require('express');
const router = express.Router();
const Blog = require('../model/Blog');

router.get("/blog/:id",async(req,res)=>{
    const {id} = req.params;
    const getBlog = await Blog.findOne({_id:id});
    res.render('particularBlog',{blog : getBlog});
})

router.get('/delete/:id',(req,res)=>{
    const {id} = req.params;
    Blog.deleteOne({_id : id})
    .then(()=>{
        console.log('blog deleted sucessfully');
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/edit/:id',async(req,res)=>{
    const {id} = req.params
    const getBlog = await Blog.findOne({_id : id});
    res.render('editBlog',{blog : getBlog});
})

router.post('/edit/:id',(req,res)=>{
    const {id} = req.params;
    const {title,content} = req.body;

    Blog.updateOne({_id : id},{title,content})
    .then(()=>{
        console.log('updated sucessfully');
        res.redirect('/');
    })
    .catch((err)=>console.log(err))
})

module.exports = router;