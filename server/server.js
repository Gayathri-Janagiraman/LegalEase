import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoutes from "./routes/aiRoutes.js";
import suggestionsRoutes from "./routes/suggestions.js";
import connectDB from "./config/db.js";
import aiQueryRoutes from "./routes/AiQueryRoutes.js";
import feedbackRoutes from "./routes/FeedbackRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/ai", aiRoutes);
app.use("/api/suggestions", suggestionsRoutes);
app.use("/api/ai-query", aiQueryRoutes);
app.use("/api/feedback", feedbackRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
