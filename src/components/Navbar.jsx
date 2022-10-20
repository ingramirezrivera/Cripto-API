import React, { useState } from "react";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <h1>
            De<span className="primary">Fi</span>
          </h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/featured">Features</Link>
          </li>
          <li>
            <Link to="/signup">Earn</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#333" }} />
          ) : (
            <FaBars size={30} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
