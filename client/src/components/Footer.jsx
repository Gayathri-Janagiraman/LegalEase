import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/legislation.png';

const Footer = () => {
  return (
    <footer className="bg-[#12274f] border-t mt-5">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-blue-700 text-2xl font-bold flex items-center gap-2">
            <img src={logo} alt="LegalEase Logo" className="w-6 h-6" />
            LegalEase
          </Link>
          <p className="mt-4 text-sm">
            Empowering individuals with knowledge of their legal rights and free tools to get started.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/ask-ai" className="hover:underline">Ask AI</Link></li>
            <li><Link to="/laws" className="hover:underline">Browse Laws</Link></li>
            <li><Link to="/templates" className="hover:underline">Templates</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/suggestions" className="hover:underline">Suggest Features</Link></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">Have a question or feedback?</p>
          <a href="mailto:support@legalease.com" className="text-blue-700 hover:underline text-sm block mt-2">
            support@legalease.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white py-4">
        © {new Date().getFullYear()} LegalEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
