import React from 'react';
import { Link } from 'react-router-dom';
import heroimg from '../assets/images/heroimg.svg';

const Hero = () => {
  return (
    <section className="bg-white py-4 px-6 text-center lg:text-left mt-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Empowering You with Legal Knowledge
          </h1>
          
          <p className="text-gray-700 text-lg mb-6">
            LegalEase is your digital helpdesk for understanding your legal rights, asking questions anonymously, and accessing free legal document templates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/laws" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
              Browse Legal Info
            </Link>
            <Link to="/ask-ai" className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300">
              Ask a Question
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={heroimg}
            alt="LegalEase Illustration"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
