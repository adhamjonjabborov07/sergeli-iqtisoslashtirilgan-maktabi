import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../Footer/logo.svg";
function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-col">
          <img src={Logo} alt="Company Logo" className="footer-logo" />
          <p className="footer-address">
            5123 Market St. #22B <br />
            Charlotttesville, California <br />
            44635
          </p>
          <a href="tel:+998901234567" className="footer-link">
            +998 90 123 45 67
          </a>
          <a href="mailto:info@liftmedia.com" className="footer-link">
            info@liftmedia.com
          </a>
        </div>


        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link to="/products" className="footer-link">Product</Link>
          <Link to="/info" className="footer-link">Information</Link>
          <Link to="/company" className="footer-link">Company</Link>
          <Link to="/about" className="footer-link">About Us</Link>
        </div>


        <div className="footer-col">
          <h3>Policies</h3>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
        </div>

  
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Lift Media. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default footer