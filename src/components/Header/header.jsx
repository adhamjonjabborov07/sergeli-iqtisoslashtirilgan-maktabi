import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.svg";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="nav-container">
        <Link to={"/"}>
          <div className="header-logo-div">
            <img className="logo-website" src={Logo} alt="logo" />
            <div>
              <p>Bizning Maktab</p>
              <p>Kelajak uchun ta’lim</p>
            </div>
          </div>
        </Link>

  
        <button
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to={"/"}>Asosiy</Link></li>
          <li><Link to={"/news"}>Yangiliklar</Link></li>
          <li><Link to={"/teachers"}>Ustozlar</Link></li>
          <li><Link to={"/schedule"}>Dars Jadvali</Link></li>
          <li><Link to={"/announcements"}>E’lonlar</Link></li>
          <li><Link to={"/about"}>Biz Haqimizda</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
