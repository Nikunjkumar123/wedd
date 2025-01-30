import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

const ContactInfo = ({ formData, handleChange, goToTab }) => {
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
            <label>
              <input type="checkbox" name="acceptTerms" required />I have read
              and agree to the{" "}
              <Link to="/termCondition" rel="noopener noreferrer">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacyPolicy" rel="noopener noreferrer">
                Privacy Policy
              </Link>
              
            </label>
          </div>
          <button
            type="button"
            className="next-btn login-page-btn"
            onClick={() => goToTab(3)}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactInfo;
