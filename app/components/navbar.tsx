"use client";
import { useState } from "react";
import { MenuCloseIcon, MenuIcon } from "./General/icons";
import { Underline } from "./General/underline";

const navLinks = [
  "Home",
  "About Us",
  "Services",
  "Experiences",
  "Portfolio",
  "Blog",
  "Contact Us",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState("");

  return (
    <header className="max-w-7xl mx-auto ">
      <nav className="">
        <div className="flex h-20 items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="">
            <a className="text-2xl font-semibold">Mak</a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            {!isOpen ? (
              <MenuIcon className="size-5" />
            ) : (
              <MenuCloseIcon className="size-5" />
            )}
          </button>
          {/* Desktoop Menu */}
          <div className="hidden md:block">
            <ul className="flex gap-10">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="relative pb-1.5 text-sm font-medium uppercase hover:text-primary transition duration-300 ease-in-out"
                    onMouseEnter={() => setIsHovered(link)}
                    onMouseLeave={() => setIsHovered("")}
                  >
                    {link}
                    {isHovered === link && <Underline style="h-0.5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`w-full py-8 mx-auto absolute bg-white ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-4 justify-center ml-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="/"
                  className="relative pb-1.5 text-sm font-medium uppercase hover:text-primary transition duration-300 ease-in-out"
                  onMouseEnter={() => setIsHovered(link)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  {link}
                  {isHovered === link && <Underline style="h-0.5" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
