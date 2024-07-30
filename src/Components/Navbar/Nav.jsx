// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import NavLink from "../../APIs/NavAPI";

const Nav = () => {
  // API
  // -----------------------------------------NavAPI---------------------------------------------

  const [navlink] = useState(NavLink);

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
            {navlink.map((e) => {
              return (
                <Link className={`text-[1.6rem] ${e.classname}`} to={e.to} key={e.id}>
                  {e.name}
                </Link>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
