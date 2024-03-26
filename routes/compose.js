const express = require('express');
const router = express.Router();
const Blog = require('../model/Blog');

router.get('/compose',(req,res)=>{
    res.render('composeBlog');
})

router.post('/compose',(req,res)=>{
    const {title,content} = req.body;
    if(!title || !content) {
        return res.send("please enter the required crediantials");
    }

    const NewBlog = new Blog({title , content});
    NewBlog
    .save()
    .then(()=>{
        console.log("Blog saved sucessfully");
        res.redirect('/');
    })
    .catch((err)=>console.log(err));
})

module.exports = router;