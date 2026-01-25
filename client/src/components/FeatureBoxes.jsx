import React from "react";
import { BookOpen, Bot, Download, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-blue-700" />,
    title: "Ask AI",
    description: "Get instant answers to your legal questions from our AI-powered assistant.",
    link: "/ask-ai"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-700" />,
    title: "Browse Laws",
    description: "Explore information within various legal rights and regulations.",
    link: "/laws"
  },
  {
    icon: <Download className="w-8 h-8 text-blue-700" />,
    title: "Download Templates",
    description: "Access ready-to-use legal document templates for free.",
    link: "/templates"
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-blue-700" />,
    title: "Share Suggestions",
    description: "Submit your ideas and suggestions to improve our platform.",
    link: "/suggestions"
  },
];

const FeatureBoxes = () => {
  return (
    <section className="bg-white py-10 px-6 ">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">What You Can Do</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const content = (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          );

          return feature.link ? (
            <Link to={feature.link} key={index}>
              {content}
            </Link>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureBoxes;
