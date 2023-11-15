import React, { useState, useEffect } from "react";
import NavLogo from "../../assets/nav/nav-logo.png";
import "../Navbar/Navbar.css";

function NavbarComponent() {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      setDesktop(window.innerWidth > 767);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div>
      <div className="navbar bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src={NavLogo} alt="Logo" className="w-20 logo" />
          <ul className="flex justify-center lg:justify-start mx-8 menu-items">
            <li className="lg:mx-8">
              <a href="#Home">Home</a>
            </li>
            <li className="lg:mx-8">
              <a href="#About">About</a>
            </li>
            <li className="lg:mx-8">
              <a href="#Services">Services</a>
            </li>
            <li className="lg:mx-8">
              <a href="#Teams">Teams</a>
            </li>
          </ul>
          {isDesktop && (
            <button className="nav-button bg-primary hover:bg-blue-900 text-white font-bold py-2 rounded ml-10 sm:px-10">
              Hire us!
            </button>
          )}
          <div className="lg:hidden">
            <button
              id="mobile-menu-button"
              className="text-black text-3xl p-4"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuVisible ? "✕" : "☰"}
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`lg:hidden ${isMobileMenuVisible ? "block" : "hidden"}`}
        >
          <ul className="block space-y-2">
            <li className="mx-4">
              <a href="#Home" onClick={toggleMobileMenu}>
                Home
              </a>
            </li>
            <li className="mx-4">
              <a href="#About" onClick={toggleMobileMenu}>
                About
              </a>
            </li>
            <li className="mx-4">
              <a href="#Services" onClick={toggleMobileMenu}>
                Services
              </a>
            </li>
            <li className="mx-4">
              <a href="#Teams" onClick={toggleMobileMenu}>
                Teams
              </a>
            </li>
            <li>
              <button
                className="nav-button-2 bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-8"
                onClick={toggleMobileMenu}
              >
                Hire us!
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
