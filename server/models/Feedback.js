import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
