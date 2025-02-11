import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { Helmet } from "react-helmet";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
ReactModal.setAppElement("#root");

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export { axiosInstance };

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
  const [myToken, setmyToken] = useState(Array(6).fill(""));
  const [email, setEmail] = useState("");
  const [femail, setfEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/v1/auth/forgotPassword", {
        email: femail,
      });
      Swal.fire({
        icon: "success",
        title: "OTP Sent!",
        text: "Check your email for OTP.",
        timer: 1500,
        showConfirmButton: false,
      });
      setShowForgotPassword(false);
      setShowOTPForm(true);
    } catch (error) {
      alert(
        setError(
          error.response?.data?.message || "Error sending OTP. Try again."
        )
      );
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    const otpValue = myToken.join("");
    if (otpValue.length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }
    try {
      await axiosInstance.post("/api/v1/auth/verifyToken", {
        email: femail,
        myToken: otpValue,
      });
      Swal.fire({
        icon: "success",
        title: "OTP Verified!",
        text: "You can reset your password now.",
        timer: 1500,
        showConfirmButton: false,
      });
      setShowOTPForm(false);
      setShowUpdatePasswordModal(true);
    } catch (error) {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/v1/auth/updatePassword", {
        email: femail,
        password: newPassword,
      });
      Swal.fire({
        icon: "success",
        title: "Password Updated!",
        text: "You can now log in with your new password.",
        timer: 1500,
        showConfirmButton: false,
      });
      setShowUpdatePasswordModal(false);
    } catch (error) {
      setError("Error updating password. Try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleOtpChange = (value, index) => {
    const updatedOtp = [...myToken];
    updatedOtp[index] = value;
    setmyToken(updatedOtp);
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
    if (!value && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // console.log(axiosInstance);
      const response = await axiosInstance.post("/api/v1/auth/login", {
        email,
        password,
      });
      // console.log("Login response: ", response.data);

      localStorage.setItem("user", "true");

      window.dispatchEvent(new Event("userStatusChanged"));

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back!",
        timer: 1000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/");
      });
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Enter your Email</label>
            </div>
            <div className="input-field password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                Don't have an account? <Link to="/signup">Create Profile</Link>
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
              <input
                type="email"
                required
                value={femail}
                onChange={(e) => setfEmail(e.target.value)}
              />
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
                  value={myToken[index] || ""}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !myToken[index]) {
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
      {/* New Modal for Updating Password */}
      <ReactModal
        isOpen={showUpdatePasswordModal}
        onRequestClose={() => setShowUpdatePasswordModal(false)}
        contentLabel="Update Password"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="form-container">
          <h2>Update Password</h2>
          <form onSubmit={handleUpdatePassword}>
            <div className="input-field">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label>Enter New Password</label>
            </div>
            <button type="submit" className="submit-button">
              Update Password
            </button>
            <button
              type="button"
              className="close-button"
              onClick={() => setShowUpdatePasswordModal(false)}
            >
              Close
            </button>
          </form>
        </div>
      </ReactModal>
    </>
  );
};

export default Loginpage;
