import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import websitelogo from "../../Assets/Websitelogo.png";
import whatsapp from "../../Assets/whatsapp.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check login status from localStorage when component mounts
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {/* =================Float whatsapp icon ================= */}

      <div>
        <Link
          to="https://api.whatsapp.com/send?phone=9599467465"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-floating whatsapp">
            <img src={whatsapp} alt="WhatsApp" />
            <span>9599467465</span>
          </button>
        </Link>
      </div>

      <div className="container-fluid nav-bg">
        <nav className="navbar">
          <div className="nav-left-data">
            <Link to="/">
              <img src={websitelogo} alt="Muslim Malik Rishte Logo" />
            </Link>
          </div>

          <div className={`nav-center-data ${menuOpen ? "menu-open" : ""}`}>
            <ul className="nav-links-container">
              <li className="nav-links">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  HOME
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/profilePage" onClick={() => setMenuOpen(false)}>
                  PROFILES
                </Link>
              </li>

              <li className="nav-links">
                <Link to="/member" onClick={() => setMenuOpen(false)}>
                  MEMBERSHIP
                </Link>
              </li>

              <li className="nav-links">
                <Link to="/contactUs" onClick={() => setMenuOpen(false)}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-right-data">
            {isLoggedIn ? (
              // Show "My Profile" when user is logged in
              <div className="nav-login-btn">
                <div className="login-icon">
                  <Link to="/userProfile">
                    <i className="bi bi-person-lines-fill"></i>
                  </Link>
                </div>
                <div className="login-name">
                  <p>
                    <Link to="/userProfile">MY PROFILE</Link>
                  </p>
                </div>
              </div>
            ) : (
              // Show "Login" when user is NOT logged in
              <div className="nav-login-btn">
                <div className="login-icon">
                  <Link to="/login">
                    <i className="bi bi-person-circle"></i>
                  </Link>
                </div>
                <div className="login-name">
                  <p>
                    <Link to="/login">LOGIN</Link>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Menu Icon */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            {menuOpen ? (
              <i className="bi bi-x-lg"></i> // Cross Icon
            ) : (
              <i className="bi bi-list"></i> // Hamburger Icon
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
