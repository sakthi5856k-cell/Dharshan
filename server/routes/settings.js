import express from "express";
import Settings from "../models/Settings.js";

const router = express.Router();

router.get("/", async(req,res)=>{

const settings = await Settings.findOne();

res.json(settings);

});

router.post("/", async(req,res)=>{

const settings = await Settings.findOneAndUpdate(
{},
req.body,
{
upsert:true,
new:true
}
);

res.json(settings);

});

export default router;
