import express from "express";
import Gallery from "../models/Gallery.js";

const router = express.Router();

router.get("/", async (req,res)=>{

const data = await Gallery.find().sort({
createdAt:-1
});

res.json(data);

});

router.post("/", async(req,res)=>{

const gallery = await Gallery.create(req.body);

res.json(gallery);

});

router.delete("/:id", async(req,res)=>{

await Gallery.findByIdAndDelete(req.params.id);

res.json({
message:"Deleted"
});

});

export default router;
