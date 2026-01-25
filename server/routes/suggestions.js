import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, suggestion } = req.body;

  if (!name || !email || !suggestion) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create transporter (using Gmail example)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // app password, NOT your main password
      },
    });

    // Mail options
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // your email
      subject: `New Suggestion from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nSuggestion:\n${suggestion}`,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Suggestion sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send suggestion" });
  }
});

export default router;
