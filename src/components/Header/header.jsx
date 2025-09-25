import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.svg";
function header() {
  return (
    <>
      <header>
        <nav className="container">
          <Link to={"/"}>
            <div className="header-logo-div">
              <img className="logo-website" src={Logo} alt="" />
              <div>
                <p>Bizning Maktab</p>
                <p>Kelajak uchun ta’lim</p>
              </div>
            </div>
          </Link>
          <ul>
            <li><Link to={"/"}>Asosiy</Link></li>
            <li><Link to={"/news"}>Yangiliklar</Link></li>
            <li><Link to={"/teachers"}>Ustozlar</Link></li>
            <li><Link to={"/schedule"}>Dars Jadvali</Link></li>
            <li><Link to={"/announcements"}>E’lonlar</Link></li>
            <li><Link to={"/about"}>Biz Haqimizda</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default header;
