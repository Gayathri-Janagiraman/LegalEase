import mongoose from "mongoose";

const aiQuerySchema = new mongoose.Schema(
  {
    question: String,
    aiResponse: String,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.model("AiQuery", aiQuerySchema);
