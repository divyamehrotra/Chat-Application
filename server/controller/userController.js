const express = require('express')
const userModel = require('../modals/userModel')
const expressAsyncHandler = require('express-async-handler')

const loginController = () => {}

const registerController = expressAsyncHandler(async (req,res) => {
    const {name,email,password} = req.body;
    //check for all fields
    if(!name || !email || !password){
        res.send(400);
        throw Error("All necessary input fields have not been filled");
    }
    //for pre-existing users
    const userExist = await userModel.findOne({email})
    if(userExist){
        throw new Error("User already exists");
    }
    //userName already taken
    const userNameExist = await userModel.findOne({name});
    if(userNameExist){
        throw new Error("User name already taken");
    }

    //create an entry
    const user = userModel.create({name,email,password});

})