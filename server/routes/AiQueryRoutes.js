import express from "express";
import AiQuery from "../models/AiQuery.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  const { question, aiResponse, category } = req.body;

  const query = await AiQuery.create({
    question,
    aiResponse,
    category,
  });

  res.status(201).json(query);
});

export default router;
