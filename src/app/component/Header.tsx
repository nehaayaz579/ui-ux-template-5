"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white ">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 h-[67px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link href="/">Bandage</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-8 text-sm font-bold  text-gray-600">
            {[
              "Home",
              "Shop",
              "Products",
              "About",
              "Team",
              "Contact",
              "Price",
            ].map((item, index) => (
              <li key={index} className="hover:text-black text-[18px]">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Login/Register */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer">
            <IoPersonOutline className="w-6 h-6 text-blue-500 hover:text-black" />
            <h6 className="text-blue-500 font-semibold text-sm hover:text-blue-700">
              Login / Register
            </h6>
          </div>

          {/* Icons */}
          <div className="flex gap-3">
            <IoSearch className="w-6 h-6 text-blue-500 hover:text-blue-700" />
            <PiShoppingCartLight className="w-6 h-6 text-blue-500 hover:text-blue-700" />
            <CiHeart className="w-6 h-6 text-blue-500 hover:text-blue-700" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-600 text-base font-medium">
            {[
              "Home",
              "Shop",
              "Products",
              "About",
              "Team",
              "Contact",
              "Price",
            ].map((item, index) => (
              <li key={index} className="hover:text-black">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
