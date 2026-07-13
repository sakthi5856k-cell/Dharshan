import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {

  res.json({
    success: true,
    message: "Message Received"
  });

});

export default router;
