import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async(req,res)=>{

const contact = await Contact.create(req.body);

res.json(contact);

});

router.get("/", async(req,res)=>{

const contacts = await Contact.find().sort({
createdAt:-1
});

res.json(contacts);

});
router.post("/", async (req, res) => {
  
  res.json({
    success: true,
    message: "Message Received"
  });

});

export default router;
