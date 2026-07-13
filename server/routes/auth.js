import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router=express.Router();

router.post("/register",async(req,res)=>{

try{

const {name,email,password}=req.body;

const exists=await User.findOne({email});

if(exists){

return res.status(400).json({
message:"User Already Exists"
});

}

const hash=await bcrypt.hash(password,10);

const user=await User.create({

name,
email,
password:hash

});

res.json(user);

}catch(err){

res.status(500).json({
message:err.message
});

}

});

router.post("/login",async(req,res)=>{

try{

const {email,password}=req.body;

const user=await User.findOne({email});

if(!user){

return res.status(404).json({
message:"Invalid Email"
});

}

const match=await bcrypt.compare(password,user.password);

if(!match){

return res.status(401).json({
message:"Wrong Password"
});

}

const token=jwt.sign(

{
id:user._id,
role:user.role
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.json({

token,
user

});

}catch(err){

res.status(500).json({
message:err.message
});

}

});

export default router;
