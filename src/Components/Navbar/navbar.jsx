import React, { useState } from "react";
import "./navbar.css"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare
} from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";

export const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className="main-container">
    {/* right side element */}
    <div className="leftSideElement">
      <h1>
        <span>S</span>and
        <span>B</span>ox
      </h1>
    </div>
    {/* middle element */}
    <div
      className={
        showMobileNav ? "middleElement mobile-middleElement" : "middleElement"
      }
    >
      <ul>
        <li>
          <a href="">Demos</a>
        </li>
        <li>
          <a href="">Pages</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Blocks</a>
        </li>
        <li>
          <a href="">Documentation</a>
        </li>
      </ul>
    </div>
    {/* left side elements */}
    <div className="rightSideElement">
      <ul>
        <li>
          <a href="">
            {/* <FaFacebookSquare /> */}
          </a>
        </li>
        <li>
          <a href="">
            <h5>EN</h5>
          </a>
        </li>
        <li>
          <a href="">
            {/* <FaYoutubeSquare /> */}
          </a>
        </li>
      </ul>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMobileNav(!showMobileNav)}>
          <FiAlignJustify />
        </a>
      </div>
    </div>
  </nav>
  )
}
