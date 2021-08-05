const mongoose = require("mongoose");
const { string } = require("prop-types");

const PostSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true,
        unique:true
    },
    description:{
        type:string,
        required:true,
    },
    photo:{
        type:string,
        required:false,
    },
    username:{
        type:string,
        required:false,
    },
    catagories:{
        type:array,
        required:false
    },
},{timestamps:true});

module.exports = mongoose.model("Post", PostSchema);