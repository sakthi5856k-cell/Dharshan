import express from "express";
import Invoice from "../models/Invoice.js";

const router = express.Router();

// Create Invoice
router.post("/", async (req, res) => {

    try {

        const invoice = await Invoice.create(req.body);

        res.json(invoice);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// Get All
router.get("/", async (req, res) => {

    const invoices = await Invoice.find().populate("bookingId");

    res.json(invoices);

});

export default router;
