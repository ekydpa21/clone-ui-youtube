import React from "react";
import "../styles/css/Navbar.css";
import { NavbarButton } from "./index";
import burger from "../assets/menu-burger.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="start">
        <NavbarButton image={burger} />
        <h2>Logo</h2>
      </div>
      <div className="center">Center</div>
      <div className="end">End</div>
    </div>
  );
}
