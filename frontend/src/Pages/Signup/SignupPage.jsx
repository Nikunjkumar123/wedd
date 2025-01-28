import React, { useState, useEffect } from "react";
import "./SignupPage.css";
import BasicInfo from "./Basicinfo";
import ContactInfo from "./ContactInfo";
import Review from "./Review";

const SignupPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    fatherName: "",
    motherName: "",
    GrandFatherName: "",
    height: "",
    dob: "",
    maritalstatus: "",
    FamilyHead: "",
    FamilyHeadOccupation: "",
    siblings: "",
    Sistersiblings: "",
    pehchan: "",

    education: "",
    working: "",
    annualIncome: "",
    house: "",
    password: "",
    profilePhoto: "",
    phone: "", // For Phone Number
    email: "",
    area: "",
    city: "", // For City
    state: "", // For State
    pin: "",
    country: "", // For Country
    weddingBudget: "", // Stores the budget for the wedding
    weddingStyle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const goToTab = (tabIndex) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <div className="container-fluid sign-up-form">
        <div className="Main-Form_container" id="signup-page">
          <div className="form-header">
            <h1 className="sign-form-heading">Create Profile</h1>
          </div>

          <div className="multitab-form-area">
            {/* Tab Links */}
            <div className="tab-links-area">
              <ul>
                <li>
                  <a
                    href="#"
                    className={
                      currentTab === 1 ? "tab-link active" : "tab-link"
                    }
                    onClick={() => goToTab(1)}
                  >
                    Personal Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      currentTab === 2 ? "tab-link active" : "tab-link"
                    }
                    onClick={() => goToTab(2)}
                  >
                    Other  Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={
                      currentTab === 3 ? "tab-link active" : "tab-link"
                    }
                    onClick={() => goToTab(3)}
                  >
                    Review
                  </a>
                </li>
              </ul>
            </div>

            {/* Form Panels */}
            <div className="tab-form-area">
              {currentTab === 1 && (
                <BasicInfo
                  formData={formData}
                  handleChange={handleChange}
                  goToTab={goToTab}
                />
              )}
              {currentTab === 2 && (
                <ContactInfo
                  formData={formData}
                  handleChange={handleChange}
                  goToTab={goToTab}
                />
              )}

              {currentTab === 3 && <Review formData={formData} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
