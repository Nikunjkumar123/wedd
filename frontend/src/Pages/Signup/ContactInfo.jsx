import React, { useState, useEffect } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Swal from "sweetalert2";
Modal.setAppElement("#root"); // Required for accessibility

const ContactInfo = ({ formData, handleChange, goToTab }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    const requiredFields = [
      "phone",
      "email",
      "area",
      "city",
      "state",
      "pin",
      "country",
      "weddingStyle",
      "acceptTerms",
    ];

    const isValid = requiredFields.every(
      (field) => formData[field]?.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  // ----------- Email verify ----------

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEmailChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if a digit is entered
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleVerifyEmail = (isSuccess) => {
    if (isSuccess) {
      Swal.fire({
        title: "OTP Verified Successfully!",
        text: "Your email has been verified.",
        icon: "success",
        confirmButtonText: "OK",
       
      });
      setIsModalOpen(false)
    } else {
      Swal.fire({
        title: "OTP Verification Failed!",
        text: "Please enter the correct OTP.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  return (
    <>
      <div>
        <h3>Other Details</h3>
        <form>
          <div className="row">
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="phone">
                  Phone <sup>*</sup>
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="email" className="label-main">
                  Email <sup>*</sup>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="area" className="label-main">
                  Area <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="city" className="label-main">
                  City <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="state" className="label-main">
                  State <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="pin" className="label-main">
                  Pin Code <sup>*</sup>
                </label>
                <input
                  type="number"
                  id="pin"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="country" className="label-main">
                  Country <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="weddingBudget" className="label-main">
                  Wedding Budget
                </label>
                <input
                  type="text"
                  id="weddingBudget"
                  name="weddingBudget"
                  value={formData.weddingBudget}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="weddingStyle" className="label-main">
                  Wedding Style <sup>*</sup>
                </label>
                <select
                  id="weddingStyle"
                  name="weddingStyle"
                  className="select-style"
                  value={formData.weddingStyle}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Style
                  </option>
                  <option value="Sunnati(Max 15 People)">
                    Sunnati (Max 15 People)
                  </option>
                  <option value="Traditional">Traditional</option>
                  <option value="Expensive">Expensive</option>
                </select>
              </div>
            </div>
          </div>

          <div className="container my-2">
            <input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              required
            />
            I have read and agree to the{" "}
            <Link to="/termCondition" rel="noopener noreferrer">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacyPolicy" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </div>
          <button
            type="button"
            className="next-btn login-page-btn bg-secondary mx-1"
            onClick={() => goToTab(1)}
          >
            Back
          </button>
          <button
            type="button"
            className="next-btn login-page-btn"
            onClick={() => goToTab(3)}
            disabled={!isFormValid}
            title={!isFormValid ? "Please fill all mandatory fields." : ""} // ✅ Shows message when disabled
          >
            Next
          </button>
          <button
            type="button"
            className="btn bg-info mx-2"
            onClick={openModal}
          >
            Verify Email
          </button>
        </form>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="otp-modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title">OTP has been sent to your Email</h5>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="modal-body text-center">
            <p>Please enter the OTP</p>
            <div className="d-flex justify-content-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  className="otp-input text-center"
                  value={digit}
                  onChange={(e) => handleEmailChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="verfity-btn"
              onClick={() => handleVerifyEmail(true)} // Pass true for success, false for error
            >
              Verify Email
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ContactInfo;
