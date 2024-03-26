const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    postedAt : {
        type : String,
        default : new Date().toString()
    }
})

module.exports = mongoose.model("Blog",BlogSchema);