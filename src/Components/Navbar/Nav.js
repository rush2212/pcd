import React, { useState } from "react";
import "./navbar.css";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [showMediaIcon, setshowMediaIcon] = useState(false);
  return (
    <nav className="main-nav">
      {/* logo section */}
      <div className="logo">
        <h2>
          <span>P</span>CD
          <span>C</span>onsultancy
        </h2>
      </div>
      {/* menu */}
      <div
        className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      {/* socials */}
      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a
              href="https://www.linkedin.com/company/pcd-consultancy-services/"
              target="blank"
            >
              <FaLinkedin className="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+918779392536" target="blank">
              <FaWhatsapp className="whatsapp" />
            </a>
          </li>
        </ul>
        {/* mobile menu */}
        <div
          className="hamburger-menu"
          onClick={(e) => {
            e.preventDefault();
            setshowMediaIcon(!showMediaIcon);
          }}
        >
          <a href="">
            <FiMenu />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
