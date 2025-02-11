import React, { useState, useEffect } from "react";
import "./SignupPage.css";

const Basicinfo = ({ formData, handleChange, goToTab }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Check if all required fields are filled
    const requiredFields = [
      "fullName",
      "age",
      "gender",
      "fatherName",
      "GrandFatherName",
      "height",
      "dob",
      "maritalstatus",
      "FamilyHead",
      "FamilyHeadOccupation",
      "siblings",
      "Sistersiblings",
      "pehchan",
      "education",
      "working",
      "house",
      "password",
    ];
    const isValid = requiredFields.every(
      (field) => formData[field]?.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <>
      <div>
        <h4>Basic Details</h4>
        <form className="main-form">
          <div className="row">
            <div className="col-md-4 col-6 col-6">
              <div className="form-field">
                <label htmlFor="fullName" className="label-main">
                  Full Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4 col-6 col-6">
              <div className="form-field">
                <label htmlFor="age" className="label-main">
                  Age <sup>*</sup>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="gender" className="label-main">
                  Gender <sup>*</sup>
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="select-style"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-6 col-6">
              <div className="form-field">
                <label htmlFor="fatherName" className="label-main">
                  Father Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="motherName" className="label-main">
                  Mother Name
                </label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="GrandFatherName" className="label-main">
                  Grand Father Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="GrandFatherName"
                  name="GrandFatherName"
                  value={formData.GrandFatherName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="height" className="label-main">
                  Height<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="form-field gender-style">
                <label htmlFor="dob" className="label-main">
                  Date of Birth <sup>*</sup>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="select-style"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="maritalstatus" className="label-main">
                  Married Status <sup>*</sup>
                </label>
                <select
                  id="maritalstatus"
                  name="maritalstatus"
                  className="select-style"
                  value={formData.maritalstatus}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Marital Status
                  </option>
                  <option value="UnMarried">Never Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Windowed">Widow</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-6">
              <div className="form-field gender-style">
                <label htmlFor="FamilyHead" className="label-main">
                  Family Head <sup>*</sup>
                </label>
                <select
                  id="FamilyHead"
                  name="FamilyHead"
                  className="select-style"
                  value={formData.FamilyHead}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Head
                  </option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="GrandFather">GrandFather</option>
                  <option value="GrandMother">GrandMother</option>
                  <option value="Uncle">Uncle</option>
                </select>
              </div>
            </div>

            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="FamilyHeadOccupation" className="label-main">
                  Occupation Head<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="FamilyHeadOccupation"
                  name="FamilyHeadOccupation"
                  value={formData.FamilyHeadOccupation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="siblings" className="label-main">
                  No. of Brothers<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="siblings"
                  name="siblings"
                  value={formData.siblings}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="Sistersiblings" className="label-main">
                  Number of Sisters<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="Sistersiblings"
                  name="Sistersiblings"
                  value={formData.Sistersiblings}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="pehchan" className="label-main">
                  Belong (Pehchan)<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="pehchan"
                  name="pehchan"
                  value={formData.pehchan}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="education" className="label-main">
                  Education<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="working" className="label-main">
                  Working<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="working"
                  name="working"
                  value={formData.working}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="form-field">
                <label htmlFor="annualIncome" className="label-main">
                  Annual Income
                </label>
                <input
                  type="number"
                  id="annualIncome"
                  name="annualIncome"
                  value={formData.annualIncome}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="house" className="label-main">
                  House <sup>*</sup>
                </label>
                <select
                  id="house"
                  name="house"
                  className="select-style"
                  value={formData.house}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="Owned">Owned</option>
                  <option value="Rental">Rental</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Password" className="label-main">
                  Create Password<sup>*</sup>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="sign-up-password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="signup-eye-icon"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <i class="bi bi-eye-slash"></i>
                  ) : (
                    <i class="bi bi-eye"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="next-btn login-page-btn"
            onClick={() => goToTab(2)}
            disabled={!isFormValid}
            title={!isFormValid ? "Please fill all mandatory fields." : ""}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Basicinfo;
