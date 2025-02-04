import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import profilebg from "../../Assets/ProfileBg.jpeg";
import Modal from "react-modal";
import axios from 'axios';
import {axiosInstance} from "../Login/Loginpage";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const ProfilePage = () => {
  const navigate = useNavigate();
  const [prf,SetPrf] = useState([])
  const [allprf,SetAllPrf] = useState([])

  const getDETAILS = async()=>{
    const response = await axiosInstance.get('/api/v1/profiles/opposite/users')
    // console.log("adta is",response.data.opp);
    SetPrf(response.data.opp);
  }
  const getALLDETAILS = async()=>{
    const response = await axiosInstance.get('/api/v1/adminPanel/allUsers')
    // console.log("adta is",response.data.opp);
    SetAllPrf(response.data);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const userStatus = localStorage.getItem("user");
    if (userStatus) {
      getDETAILS();
    }else{
      getALLDETAILS();
    }
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const [filters, setFilters] = useState({
    gender: "",
    age: 25, 
    city: "",
    budget: 50000, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Applied Filters:", filters);
    alert("Filters applied successfully!");
  };

  const handlefilterSubmit = async () => {
    try {
      const response = await axiosInstance.post(
        '/api/v1/profiles/profiles/filter',
        filters, // Make sure 'filters' contains gender, age, city, and budget
        {
          headers: {
            'Content-Type': 'application/json', 
          },
        }
      );
      console.log("Filtered Users:", response.data.all);
      // Handle the response (e.g., set the filtered users in state to render them)
    } catch (error) {
      console.error("Error applying filters:", error);
      // You can show an error message to the user
    }
  };
  

  return (
    <>
      <Helmet>
        <title>Our Top Profiles</title>
        <meta
          name="description"
          content="Explore the top profiles on our platform"
        />
      </Helmet>

      <section>
        <div className="page-header">
          <h2>Every Journey Starts With a Connection</h2>
          <div className="page-render">
            <Link to="/">Home &nbsp; </Link>
            <p>&gt; Profile</p>
          </div>
        </div>
      </section>

      <section className="Profile-section">
        <div className="container">
          <div className="Heading">
            <h2>Our Top Profiles</h2>
          </div>

          <div className="row filter-bar">
            <h2 className="col-12 text-center">Find Your Perfect Match</h2>
            <form
              className="filter-form d-flex flex-wrap align-items-center justify-content-center"
              onSubmit={handleSubmit}
            >
              {/* Gender Filter */}
              <div className="filter-item col-md-2 col-12">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={filters.gender}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* City Filter */}
              <div className="filter-item col-md-3 col-12">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={filters.city}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter City"
                />
              </div>

              {/* Age Range Slider */}
              <div className="filter-item col-md-3 col-12">
                <label htmlFor="age">Age Range: {filters.age}</label>
                <input
                  type="range"
                  id="age"
                  name="age"
                  min="18"
                  max="60"
                  value={filters.age}
                  onChange={handleInputChange}
                  className="form-range"
                />
              </div>

              {/* Wedding Budget Range Slider */}
              <div className="filter-item col-md-3 col-12">
                <label htmlFor="budget">
                  Wedding Budget Range: ₹{filters.budget}
                </label>
                <input
                  type="range"
                  id="budget"
                  name="budget"
                  min="10000"
                  max="10000000"
                  step="2"
                  value={filters.budget}
                  onChange={handleInputChange}
                  className="form-range"
                />
              </div>

              {/* Submit Button */}
              <div className="col-md-1 col-12 text-center mt-md-0 mt-3">
                <button type="submit" className="btn-btn filter-submit" onClick={handlefilterSubmit}>
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="row">
          {localStorage.getItem("user") ? (
            <div className="profile-container">
              {prf.map((profile) => (
                <div
                  className="profile-card col-md-3 mb-4"
                  key={profile._id}
                >
                  <div
                    className="profile-image"
                    style={{
                      backgroundImage: `url(${profilebg})`,
                    }}
                  >
                    <img
                      src={profile.image}
                      alt={profile.fullName}
                      onClick={() => {
                        setModalOpen(true)
                        navigate(`/InnerProfile/${profile._id}`)
                      }}
                      className="profile-pic"
                    />
                  </div>
                  <div className="profile-details">
                    <div className="details-row">
                      <p>
                        <strong>Name:</strong> {profile.fullName}
                      </p>
                      <p>
                        <strong>Age:</strong> {profile.age}
                      </p>
                    </div>
                    <div className="details-row">
                      <p>
                        <strong>Place:</strong> {profile.state}
                      </p>
                      <p>
                        <strong>Height:</strong> {profile.height}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) :(
            <div className="profile-container">
              {allprf.map((profile) => (
                <div
                  className="profile-card col-md-3 mb-4"
                  key={profile._id}
                >
                  <div
                    className="profile-image"
                    style={{
                      backgroundImage: `url(${profilebg})`,
                    }}
                  >
                    <img
                      src={profile.image}
                      alt={profile.fullName}
                      onClick={() => {
                        setModalOpen(true)
                        navigate(`/login`)
                      }}
                      className="profile-pic"
                    />
                  </div>
                  <div className="profile-details">
                    <div className="details-row">
                      <p>
                        <strong>Name:</strong> {profile.fullName}
                      </p>
                      <p>
                        <strong>Age:</strong> {profile.age}
                      </p>
                    </div>
                    <div className="details-row">
                      <p>
                        <strong>Place:</strong> {profile.state}
                      </p>
                      <p>
                        <strong>Height:</strong> {profile.height}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                borderRadius: "10px",
                padding: "20px",
              },
              overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
            }}
          >
            <h2>Login Request</h2>
            <p>Please log in to view more details. </p>
            <Link to="/login">
              <button
                style={{
                  marginRight: "10px",
                  padding: "8px 16px",
                  background: "#800020",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                }}
                onClick={() => alert("Redirecting to Login page...")}
              >
                Login
              </button>
            </Link>
            <button
              style={{
                padding: "8px 16px",
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
