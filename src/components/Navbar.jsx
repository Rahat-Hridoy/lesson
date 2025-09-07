import React, { useState, useEffect, useCallback } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

const NavItems = ({ onItemClick }) => {
  const navItems = ["Home", "Courses", "Pricing", "Reviews"];

  const handleClick = useCallback(() => {
    if (onItemClick) onItemClick();
  }, [onItemClick]);

  return (
    <ul className="flex flex-col justify-between space-y-5 md:space-y-0 md:flex-row md:items-center md:space-x-10">
      {navItems.map((item, index) => (
        <li key={index} className="nav-list group">
          <a
            href={`${item.toLowerCase()}`}
            className="block py-2 transition-colors duration-300 hover:text-cdark focus:text-cdark focus:outline-none"
            onClick={handleClick}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick();
            }}
            tabIndex={0}
          >
            {item}
          </a>
          <div className="w-0 h-0.5 bg-cdark transition-all duration-300 group-hover:w-1/2 group-focus-within:w-1/2"></div>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="bg-primary">
      <div className="container mx-auto px-4 pt-[36px] ">
        <div className="flex justify-between items-center h-[50px] ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="Lesson Home">
              <img
                src="/image/lesson..png"
                alt="Lesson logo"
                width={100}
                height={32}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <NavItems />
            <button className="w-36 h-12 bg-gray-900 rounded-full font-semibold text-white transition-all duration-300 hover:scale-95 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 "
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? null : <CgMenuRight size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${
            isMenuOpen
              ? "opacity-75 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
          aria-hidden={!isMenuOpen}
        ></div>

        <div
          className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-modal="true"
          role="dialog"
          aria-label="Navigation menu"
        >
          <div className="flex justify-end p-4">
            <button
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <RxCross1 size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] px-6">
            <NavItems onItemClick={closeMenu} />
            <button className="mt-10 w-full max-w-xs h-12 bg-gray-900 rounded-full font-semibold text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
