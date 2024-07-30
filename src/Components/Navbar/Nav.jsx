// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  // Responsive Navbar

  const [isActive, setIsActive] = useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header
        className={`header fixed w-full top-0 left-0 align-middle z-[1001] flex justify-between items-center px-[4rem] py-[2rem] transition-all duration-[0.4s] ease-linear bg-[black] text-[white] ${
          isActive ? "active" : ""
        } `}
      >
        <div className="logo flex items-center gap-[2rem]">
          <div className="mobile-navbar-btn" onClick={toggleNavbar}>
            <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
            <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
          </div>
          <h2 className="text-[2rem] font-medium">FixStore</h2>
        </div>
        <nav className="navbar">
          <ul className="flex items-center gap-[4rem]">
            <Link
              className="navlink text-[1.6rem] text-[white] font-normal hover:underline hover:text-[goldenrod] transition-all duration-[0.3s] ease-linear"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="navlink text-[1.6rem] text-[white] font-normal hover:underline hover:text-[goldenrod] transition-all duration-[0.3s] ease-linear"
              to={"/"}
            >
              About
            </Link>
            <Link
              className="navlink text-[1.6rem] text-[white] font-normal hover:underline hover:text-[goldenrod] transition-all duration-[0.3s] ease-linear"
              to={"/"}
            >
              Service
            </Link>
            <Link
              className="navlink text-[1.6rem] text-[white] font-normal hover:underline hover:text-[goldenrod] transition-all duration-[0.3s] ease-linear"
              to={"/"}
            >
              Product
            </Link>
            <Link
              className="navlink text-[1.6rem] text-[white] font-normal hover:underline hover:text-[goldenrod] transition-all duration-[0.3s] ease-linear"
              to={"/"}
            >
              Collection
            </Link>
            <Link
              className="navlink text-[1.6rem] text-[white] font-normal hover:underline hover:text-[goldenrod] transition-all duration-[0.3s] ease-linear"
              to={"/"}
            >
              Contact
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
