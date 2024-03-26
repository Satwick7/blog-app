const express = require('express');
const router = express.Router();
const Blog = require('../model/Blog');

router.get('/',async(req,res)=>{
    const allBlogs = await Blog.find();
    res.render('index',{blogs : allBlogs});
})



module.exports = router;