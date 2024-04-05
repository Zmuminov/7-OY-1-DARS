import React from "react";
// IMPORTED MY FILE
import "./index.css";
// IMPORTED OTHER WEBPAGE
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Logo from "../../assets/Alifreza.svg";
function Header() {
  return (
    // HEADER START
    <div className="header">
      {/* LOGO START */}
      <img
        style={{ cursor: "pointer" }}
        src={Logo}
        alt="Portfolio Web Tailwind Css Web site logo"
      />
      {/* UL START */}
      <div className="headerList">
        <ul className="headerListItem">
          <li className="ulItems">Home</li>
          <li className="ulItems">Services</li>
          <li className="ulItems">Work</li>
          <li className="ulItems">About us</li>
          <li className="ulItems">Blog</li>
        </ul>
        <button className="greenBtn">Contact</button>
      </div>
    </div>
  );
}

export default Header;
