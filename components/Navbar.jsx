"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between container mx-auto">
        <div className="text-white text-lg font-bold">
          <Link href="/">MyLogo</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center lg:flex lg:flex-row ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mx-2"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mx-2"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="/service"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mx-2"
          onClick={toggleMenu}
        >
          Service
        </Link>
        <Link
          href="/contact"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mx-2"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
