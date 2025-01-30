import React, { useState } from "react";
import axios from "axios";
import "./SignupPage.css";

const Review = ({ formData }) => {
  const [profileImage, setProfileImage] = useState(null);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      const formDataWithImage = new FormData();
      // Append all form data fields
      Object.keys(formData).forEach((key) => {
        formDataWithImage.append(key, formData[key]);
      });

      // Append the image
      if (profileImage) {
        formDataWithImage.append("image", profileImage);
      }

      const response = await axios.post(
        "https://malikwedd.onrender.com/api/v1/auth/register",
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Form submitted successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <>
      <div>
        <h3>Review and Submit</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Full Name</label>
              <p className="Signup-Review">{formData.fullName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Age</label>
              <p className="Signup-Review">{formData.age}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Gender</label>
              <p className="Signup-Review">{formData.gender}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Father's Name</label>
              <p className="Signup-Review">{formData.fatherName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Mother's Name</label>
              <p className="Signup-Review">{formData.motherName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Grandfather's Name</label>
              <p className="Signup-Review">{formData.GrandFatherName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Height</label>
              <p className="Signup-Review">{formData.height}</p>
            </div>
            <div className="form-field">
              <label className="label-main">DOB</label>
              <p className="Signup-Review">{formData.dob}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Married Status</label>
              <p className="Signup-Review">{formData.maritalstatus}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Password</label>
              <p className="Signup-Review">{formData.password}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Family Head</label>
              <p className="Signup-Review">{formData.FamilyHead}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Family Head Occupation</label>
              <p className="Signup-Review">{formData.FamilyHeadOccupation}</p>
            </div>
            <div className="form-field">
              <label className="label-main">No. of Brothers</label>
              <p className="Signup-Review">{formData.siblings}</p>
            </div>
            <div className="form-field">
              <label className="label-main">No. of Sisters</label>
              <p className="Signup-Review">{formData.Sistersiblings}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Belong(Pehchan)</label>
              <p className="Signup-Review">{formData.pehchan}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Education</label>
              <p className="Signup-Review">{formData.education}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Working</label>
              <p className="Signup-Review">{formData.working}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Annual Income</label>
              <p className="Signup-Review">{formData.annualIncome}</p>
            </div>
            <div className="form-field">
              <label className="label-main">House</label>
              <p className="Signup-Review">{formData.house}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Phone</label>
              <p className="Signup-Review">{formData.phone}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Email</label>
              <p className="Signup-Review">{formData.email}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Area</label>
              <p className="Signup-Review">{formData.area}</p>
            </div>
            <div className="form-field">
              <label className="label-main">City</label>
              <p className="Signup-Review">{formData.city}</p>
            </div>
            <div className="form-field">
              <label className="label-main">State</label>
              <p className="Signup-Review">{formData.state}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Pin Code</label>
              <p className="Signup-Review">{formData.pin}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Country</label>
              <p className="Signup-Review">{formData.country}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Wedding Budget</label>
              <p className="Signup-Review">{formData.weddingBudget}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Wedding Style</label>
              <p className="Signup-Review">{formData.weddingStyle}</p>
            </div>
            <div className="form-field">
              <label htmlFor="ProfilePhoto" className="label-main">
                Upload Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="submit-btn login-page-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Review;
