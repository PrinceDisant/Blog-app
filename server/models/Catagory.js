const mongoose = require("mongoose");
const { string } = require("prop-types");

const CatagorySchema = new mongoose.Schema({
    name:{
        type:string,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Catagory", CatagorySchema);