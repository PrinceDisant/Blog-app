const router = require("express").Router;
const User = require("../models/User");

//REGISTER
register.post("register", async (req, res)={
    try{
        const newUser = new User()
    }catch(err){
        res.status(500).json(err);
    }
})

//ROUTER