import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/legislation.png';
import baricon from '../assets/images/menu.png';
import closeicon from '../assets/images/wrong.png';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Ask AI", path: "/ask-ai" },
        { name: "Browse Laws", path: "/laws" },
        { name: "Templates", path: "/templates" },
        { name: "Suggestions", path: "/suggestions" },
        { name: "About", path: "/about" }
    ];

    return (
        <nav className="bg-white shadow-md px-6 py-4 fixed w-full top-0 z-50 ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-blue-700 text-2xl font-bold flex p-1">
                    <img
                        src={logo}
                        alt="LegalEase Icon"
                        className="w-8 h-8"
                    />
                    <span>LegalEase</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                        <img
                            src={isOpen ? closeicon : baricon}
                            alt="bar icon"
                            className="w-5 h-5">
                        </img>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
