import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  const feedback = await Feedback.create({
    message: req.body.message,
  });

  res.status(201).json(feedback);
});

export default router;
