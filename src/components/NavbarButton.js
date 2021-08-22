import React from "react";
import "../styles/css/NavbarButton.css";

export default function NavbarButton({ image }) {
  return (
    <button className="navbar-button">
      <img src={image} alt="" />
    </button>
  );
}
