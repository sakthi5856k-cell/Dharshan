import express from "express";
import Quote from "../models/Quote.js";

const router=express.Router();

router.post("/",async(req,res)=>{

const quote=await Quote.create(req.body);

res.json(quote);

});

router.get("/",async(req,res)=>{

const quotes=await Quote.find();

res.json(quotes);

});

export default router;
