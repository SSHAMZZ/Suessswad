import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/suessswad_logo.jpg"; // adjust path as needed

export default function Navbar() {
  const location = useLocation(); // Get current route
  const isCurated = location.pathname === "/Curated-menu";// Check if current route is Curated-menu, boolean value

  return (
    <nav className={`navbar ${isCurated ? "curated" : "home"}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Suessswad Logo" />
        </Link>

        {/* Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Curated-menu" className="nav-link">
            Curated Menu
          </Link>
        </div>
      </div>
    </nav>
  );
}
