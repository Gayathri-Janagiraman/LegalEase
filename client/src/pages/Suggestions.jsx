// import React, { useState } from "react";
// import Footer from "../components/Footer";

// const Suggestions = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [suggestion, setSuggestion] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // For now just simulate sending
//     console.log("Suggestion submitted:", { name, email, suggestion });

//     setSubmitted(true);

//     // Reset form
//     setName("");
//     setEmail("");
//     setSuggestion("");
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
//           <h1 className="text-3xl font-bold text-center text-blue-700 mb-4 flex items-center justify-center gap-2">
//             💡 Share Your Suggestions
//           </h1>
//           <p className="text-sm text-gray-500 text-center italic mb-6">
//             Help us improve LegalEase by sharing your thoughts or new feature ideas.
//           </p>

//           {submitted ? (
//             <div className="bg-green-100 text-green-700 p-4 rounded-md text-center font-medium">
//               ✅ Thank you! Your suggestion has been submitted.
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               <input
//                 type="text"
//                 className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />

//               <input
//                 type="email"
//                 className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//               <textarea
//                 rows="4"
//                 className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Write your suggestion..."
//                 value={suggestion}
//                 onChange={(e) => setSuggestion(e.target.value)}
//                 required
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//               >
//                 Submit Suggestion
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Suggestions;

import React, { useState } from "react";
import Footer from "../components/Footer";

const Suggestions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // SAVE SUGGESTION TO MONGODB
      const response = await fetch("https://legalease-x5a6.onrender.com/api/feedback/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: suggestion,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setSuggestion("");
      } else {
        alert("Failed to send suggestion. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending suggestion. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-4 flex items-center justify-center gap-2">
            💡 Share Your Suggestions
          </h1>
          <p className="text-sm text-gray-500 text-center italic mb-6">
            Help us improve LegalEase by sharing your thoughts or new feature ideas.
          </p>

          {submitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-md text-center font-medium">
              ✅ Thank you! Your suggestion has been submitted.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <textarea
                rows="4"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your suggestion..."
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                required
              ></textarea>

              <button
                type="submit"
                className={`flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Suggestion"}
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Suggestions;
