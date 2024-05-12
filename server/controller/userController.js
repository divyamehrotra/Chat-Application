const userModel = require('../modals/userModel')
const expressAsyncHandler = require('express-async-handler')
const generateToken = require('../config/generateToken')

const loginController = expressAsyncHandler(async(req,res) => {
    const {name,password} = req.body;
    const user = userModel.findOne({name});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }
    else{
        throw new Error("Invalid UserName or Password")
    }
})

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
        throw new Error("UserName already taken");
    }

    //create an entry
    const user = await userModel.create({name,email,password});
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
        })
    }
    else{
        res.status(400);
        throw new Error("Registration Error")
    }
})

module.exports = {loginController,registerController};