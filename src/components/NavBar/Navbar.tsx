"use client";

import { useState } from "react";
import CartIcon from "../../../public/assets/Icons/CartIcon";
import LogoIcon from "../../../public/assets/Icons/Logo.Icon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-black/20 font-manrope font-medium tracking-widest backdrop-blur">
      <div className="flex flex-row justify-between px-6 py-4 md:mx-auto md:w-[1110px]">
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify"
          >
            <path d="M3 12h18" />
            <path d="M3 18h18" />
            <path d="M3 6h18" />
          </svg>
        </button>

        {/* Logo */}
        <div className="text-center md:text-left">
          <LogoIcon />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden text-white md:flex md:justify-center md:gap-6">
          <li className="text-sm transition-all hover:cursor-pointer hover:text-[#FBAF85]">
            HOME
          </li>
          <li className="text-sm transition-all hover:cursor-pointer hover:text-[#FBAF85]">
            HEADPHONES
          </li>
          <li className="text-sm transition-all hover:cursor-pointer hover:text-[#FBAF85]">
            SPEAKERS
          </li>
          <li className="text-sm transition-all hover:cursor-pointer hover:text-[#FBAF85]">
            EARPHONES
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="text-white">
          <CartIcon />
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto hidden w-full border-b-2 border-zinc-800 md:block md:w-[1110px]" />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex h-screen w-full flex-col items-center justify-start gap-20 bg-black/85 py-4 pt-16 text-2xl text-white backdrop-blur-md md:hidden">
          <li className="transition-all hover:cursor-pointer hover:text-[#FBAF85]">
            HOME
          </li>
          <li className="transition-all hover:cursor-pointer hover:text-[#FBAF85]">
            HEADPHONES
          </li>
          <li className="transition-all hover:cursor-pointer hover:text-[#FBAF85]">
            SPEAKERS
          </li>
          <li className="transition-all hover:cursor-pointer hover:text-[#FBAF85]">
            EARPHONES
          </li>
        </ul>
      )}
    </nav>
  );
}
