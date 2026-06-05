import React, { useState } from "react";
import Footer from "../components/Footer";

const AskAI = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userQuestion = question; // 🔹 store question before clearing

    const userMessage = { role: "user", content: userQuestion };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      // 1️⃣ Call AI backend
      const res = await fetch("https://legalease-x5a6.onrender.com/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userQuestion }),
      });

      const data = await res.json();

      const aiMessage = {
        role: "ai",
        content: data.response,
      };

      // 2️⃣ Show AI response
      setMessages((prev) => [...prev, aiMessage]);

      // 3️⃣ SAVE TO MONGODB
      await fetch("https://legalease-x5a6.onrender.com/api/ai-query/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userQuestion,
          aiResponse: data.response,
          category: "General Law",
        }),
      });

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "❌ Error fetching AI response." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow pt-24 pb-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md flex flex-col h-[70vh]">

          <h1 className="text-2xl font-bold text-center text-blue-700 py-4 border-b">
            🤖 Ask LegalEase AI
          </h1>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-lg text-sm whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-gray-500 text-sm">AI is typing...</div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
            <input  
              type="text"
              className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ask your legal question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 rounded-md hover:bg-blue-700 transition"
            >
              Ask
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AskAI;
