import express from "express";
import Driver from "../models/Driver.js";

const router=express.Router();

router.get("/",async(req,res)=>{

const drivers=await Driver.find();

res.json(drivers);

});

router.post("/",async(req,res)=>{

const driver=await Driver.create(req.body);

res.json(driver);

});

router.put("/:id",async(req,res)=>{

const driver=await Driver.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json(driver);

});

router.delete("/:id",async(req,res)=>{

await Driver.findByIdAndDelete(req.params.id);

res.json({
message:"Deleted"
});

});

export default router;
