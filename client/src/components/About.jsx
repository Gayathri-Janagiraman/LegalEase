import { Link } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-4">
            About LegalEase ⚖️
          </h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            LegalEase is a MERN-stack powered platform designed to make legal
            knowledge simple, accessible, and helpful for everyone.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                🌟 Our Mission
              </h2>
              <p className="text-gray-600">
                We aim to empower individuals by providing instant legal
                assistance, simplified information on rights, ready-to-use
                templates, and a space for user feedback. LegalEase bridges the
                gap between complex laws and everyday understanding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                🔑 What We Offer
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>🤖 AI-powered assistant for instant legal Q&A</li>
                <li>📚 Easy-to-understand information on laws</li>
                <li>📑 Free downloadable legal templates</li>
                <li>💬 A platform for sharing suggestions & feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                📩 Get in Touch
              </h2>
              <p className="text-gray-600">
                Have questions, feedback, or suggestions? We’d love to hear from
                you! Reach out through our{" "}
                <Link
                  to="/suggestions"
                  className="text-blue-600 font-medium underline"
                >
                  Suggestions page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;

