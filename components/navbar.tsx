"use client";
import { useEffect, useState } from "react";
import { MenuCloseIcon, MenuIcon } from "./General/icons";
import { Underline } from "./General/underline";
import Link from "next/link";
import { navLinks } from "../constants";

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="max-w-screen-2xl mx-auto bg-white">
      <nav>
        <div
          className={`fixed z-50 w-full mx-auto ${
            scrolled ? "bg-white shadow-lg" : "bg-transparent"
          }`}
        >
          <div className=" mx-auto max-w-[1200px]">
            <div className="flex h-20 xl:h-24 items-center justify-between px-4 py-5">
              {/* Logo */}
              <div>
                <Link href="/" className="text-2xl font-semibold">
                  Mak
                </Link>
              </div>
              <button
                type="button"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <MenuIcon className="size-5" />
                ) : (
                  <MenuCloseIcon className="size-5" />
                )}
              </button>
              {/* Desktoop Menu */}
              <div className="hidden md:block">
                <ul className="flex gap-4 lg:gap-10">
                  {navLinks.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={` #${link.href}`}
                        className="relative pb-1.5 text-sm font-medium capitalize hover:text-primary transition duration-300 ease-in-out"
                        onMouseEnter={() => setIsHovered(link.text)}
                        onMouseLeave={() => setIsHovered("")}
                      >
                        {link.text}
                        {(isHovered === link.text ||
                          activeSection === link.href) && (
                          <Underline style="h-0.5" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`w-full py-24 mx-auto bg-white ${
            isOpen ? "fixed z-30 md:hidden" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-6 justify-center ml-6">
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href="/"
                  className="relative pb-1.5 text-sm font-medium uppercase hover:text-primary transition duration-300 ease-in-out"
                  onMouseEnter={() => setIsHovered(link.text)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  {link.text}
                  {isHovered === link.text && <Underline style="h-0.5" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
