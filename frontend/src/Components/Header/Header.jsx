import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Removed 'isCookie' (not needed)
import "./Header.css";
import websitelogo from "../../Assets/malikLogobgr.png";
import whatsapp from "../../Assets/whatsapp.png";

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [num,SetNum] = useState();

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  useEffect(() => {
    const checkUserStatus = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user); // Update state based on user existence
    };

    // Run once on mount
    checkUserStatus();

    // Listen for login/logout events
    window.addEventListener("userStatusChanged", checkUserStatus);

    // countConnections

    return () => {
      window.removeEventListener("userStatusChanged", checkUserStatus);
    };
  }, []);

  return (
    <>
      {/* =================Float whatsapp icon ================= */}
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=919599467465"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-floating whatsapp">
            <img src={whatsapp} alt="WhatsApp" />
            <span>+91 9599467465</span>
          </button>
        </a>
      </div>

      <div className="container-fluid nav-bg">
        <nav className="navbar">
          <div className="nav-left-data">
            <Link to="/">
              <img src={websitelogo} alt="Muslim Malik Rishte Logo" />
            </Link>
          </div>

          <div className={"nav-center-data"}>
            <ul className="nav-links-container">
              <li className="nav-links">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-links">
                <Link to="/profilePage">PROFILES</Link>
              </li>

              <li className="nav-links">
                <Link to="/member">MEMBERSHIP</Link>
              </li>

              <li className="nav-links">
                <Link to="/contactUs">CONTACT US</Link>
              </li>
            </ul>
          </div>

          <div className="nav-right-data">
            {!isLoggedIn ? (
              // Show "My Login" when user is logged in
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
            ) : (
              // Show "MyProfile" when user is NOT logged in
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
            )}

            {!isLoggedIn ? (
              <div className="nav-login-btn">
                <div className="login-icon">
                  <Link to="/signup">
                    <i class="bi bi-person-fill-add"></i>
                  </Link>
                </div>
                <div className="login-name">
                  <p>
                    <Link to="/signup">SIGN UP</Link>
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>

        <nav className="mobile-navbar">
          <Link to="/" className="nav-item">
            <i class="bi bi-house-door-fill"></i>
            <span>Home</span>
          </Link>
          <Link to="/profilePage" className="nav-item">
            <i class="bi bi-person-circle"></i>
            <span>User Profiles</span>
          </Link>

          {!isLoggedIn ? (
            <Link to="/signup" className="nav-item">
              <i class="bi bi-person-plus-fill"></i>
              <span>Sign Up</span>
            </Link>
          ) : (
            <Link to="/signup" className="nav-item">
              <i class="bi bi-chat-heart-fill">
                <sup>+5</sup>
              </i>
              <span>My Connections</span>
            </Link>
          )}

          {!isLoggedIn ? (
            <Link to="/login" className="nav-item">
              <i class="bi bi-person-fill-check"></i>
              <span>Login</span>
            </Link>
          ) : (
            <Link to="/userProfile" className="nav-item">
              <i class="bi bi-person-fill-check"></i>
              <span>My Profile</span>
            </Link>
          )}
          {/* <Link to="/contactUs" className="nav-item">
            <i class="bi bi-gear-wide-connected"></i> <span>Contact Us</span>
          </Link> */}
        </nav>
      </div>
    </>
  );
};

export default Header;
