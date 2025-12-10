"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center h-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full shadow-lg px-6">
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="text-3xl">💑</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                  Couple Socials
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Home
              </a>
              <a href="/events" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Events
              </a>
              <a href="/features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Features
              </a>
              <a href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Pricing
              </a>
              <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                About
              </a>
              <a href="/faqs" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                FAQs
              </a>
              <a
                href="/sign-in"
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Sign In
              </a>
              <ThemeToggle />
            </div>
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="relative w-8 h-8 flex flex-col justify-center items-center text-gray-700 dark:text-gray-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-4 right-4 z-40 md:hidden bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-6 space-y-4">
          <a
            href="/"
            onClick={closeMenu}
            className="block py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="/events"
            onClick={closeMenu}
            className="block py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Events
          </a>
          <a
            href="/features"
            onClick={closeMenu}
            className="block py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="/pricing"
            onClick={closeMenu}
            className="block py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Pricing
          </a>
          <a
            href="/about"
            onClick={closeMenu}
            className="block py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="/faqs"
            onClick={closeMenu}
            className="block py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
          >
            FAQs
          </a>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <a
              href="/sign-in"
              onClick={closeMenu}
              className="block py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-center hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-md"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

