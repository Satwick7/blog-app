const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017/blog_tut",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('database is connected'));

// middlewares
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set('view engine','ejs');

// routes
app.use(require('./routes/index'));
app.use(require('./routes/compose'));
app.use(require('./routes/blog'));

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})