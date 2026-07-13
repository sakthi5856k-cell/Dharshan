import express from "express";
import Shipment from "../models/Shipment.js";

const router = express.Router();

// Create Shipment
router.post("/",async(req,res)=>{

try{

const shipment=await Shipment.create(req.body);

res.json(shipment);

}catch(err){

res.status(500).json({
message:err.message
});

}

});

// Get All Shipments
router.get("/",async(req,res)=>{

const data=await Shipment.find().populate("bookingId");

res.json(data);

});

// Update Shipment Status
router.put("/:id",async(req,res)=>{

const shipment=await Shipment.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json(shipment);

});

export default router;
