import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { Helmet } from "react-helmet";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

ReactModal.setAppElement("#root"); // Set the root element for accessibility

// Define axiosInstance outside the Loginpage component
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // API base URL
  withCredentials: true,
});

export { axiosInstance }; // Export axiosInstance here

const Loginpage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState("");

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    alert("OTP sent to your Email");
    setShowForgotPassword(false);
    setShowOTPForm(true);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }
    setError("");
    alert("OTP Verified!");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleOtpChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
    if (!value && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // Handle the login functionality with API
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(axiosInstance);
      const response = await axiosInstance.post("/api/v1/auth/login", {
        email,
        password,
      });
      console.log("Login response: ", response.data);
      alert("Login successful!");
      // You can handle the successful response here, like saving the token
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Muslim Malik Rishte</title>
        <meta
          name="description"
          content="Log in to Muslim Malik Rishte to find your perfect match. Enter your credentials or reset your password for easy access."
        />
      </Helmet>
      <div className="container-fluid login-bg">
        <div className="wrapper">
          <form onSubmit={handleLogin} className="Login-form">
            {" "}
            {/* Added handleLogin here */}
            <h2 className="login-heading">Login</h2>
            <div className="input-field">
              <input
                type="email"
                value={email} // Set email value
                onChange={(e) => setEmail(e.target.value)} // Handle email change
                required
              />
              <label>Enter your Email</label>
            </div>
            <div className="input-field password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password} // Set password value
                onChange={(e) => setPassword(e.target.value)} // Handle password change
                required
              />
              <label>Enter your Password</label>
              <button
                type="button"
                className="eye-icon"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "🙈" : "👁️"}
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Show error */}
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <button
                type="button"
                className="link-button"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot password?
              </button>
            </div>
            <button type="submit" className="Login-button">
              Log In
            </button>
            <div className="register">
              <p>
                Don't have an account? <Link to="/signup">Create Account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <ReactModal
        isOpen={showForgotPassword}
        onRequestClose={() => setShowForgotPassword(false)}
        contentLabel="Forgot Password"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="form-container">
          <h3>Forgot Password</h3>
          <form onSubmit={handleForgotPasswordSubmit}>
            <div className="input-field">
              <input type="email" required />
              <label>Enter your Email</label>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="close-button"
              onClick={() => setShowForgotPassword(false)}
            >
              Close
            </button>
          </form>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={showOTPForm}
        onRequestClose={() => setShowOTPForm(false)}
        contentLabel="Enter OTP"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="form-container">
          <h2>Enter OTP</h2>
          <form onSubmit={handleOTPSubmit}>
            <div className="input-field otp-field">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={otp[index] || ""}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !otp[index]) {
                      handleOtpChange("", index - 1);
                    }
                  }}
                  className="otp-input"
                />
              ))}
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button">
              Verify OTP
            </button>
            <button
              type="button"
              className="close-button"
              onClick={() => setShowOTPForm(false)}
            >
              Close
            </button>
          </form>
        </div>
      </ReactModal>
    </>
  );
};

export default Loginpage; // Default export for Loginpage component
