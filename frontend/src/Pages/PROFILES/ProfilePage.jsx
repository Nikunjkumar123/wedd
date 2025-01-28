import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import profilebg from "../../Assets/ProfileBg.jpeg";
import profileimg from "../../Assets/Testimonial1.jpg";
import profileimg2 from "../../Assets/Testimonail.png";
import profileimg3 from "../../Assets/Testimonial1.jpg";
import profileimg4 from "../../Assets/Testimonial2.png";
import profileimg5 from "../../Assets/Testimonial3.png";
import profileimg6 from "../../Assets/Testimonial4.png";
import profileimg7 from "../../Assets/Testimonial5.png";
import stories1 from "../../Assets/Testimonial5.png";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const profileImage = [
    {
      img: profileimg,
      profileID: 101,
      name: "Shruti",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: stories1,
      profileID: 102,
      name: "Kirti",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg2,
      profileID: 103,
      name: "Arti",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg3,
      profileID: 104,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg4,
      profileID: 105,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg5,
      profileID: 106,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg6,
      profileID: 107,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg7,
      profileID: 108,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
  ];

  // ===== Filter Code =====

  const [filters, setFilters] = useState({
    gender: "",
    age: 25, // Default age slider value
    city: "",
    budget: 50000, // Default budget slider value
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
    console.log("Applied Filters:", filters);
    alert("Filters applied successfully!");
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
                  min="16"
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
                  max="100000"
                  step="5000"
                  value={filters.budget}
                  onChange={handleInputChange}
                  className="form-range"
                />
              </div>

              {/* Submit Button */}
              <div className="col-md-1 col-12 text-center mt-md-0 mt-3">
                <button type="submit" className="btn-btn filter-submit">
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="profile-container">
              {profileImage.map((profile) => (
                <div
                  className="profile-card col-md-3 mb-4"
                  key={profile.profileID}
                >
                  <div
                    className="profile-image"
                    style={{
                      backgroundImage: `url(${profilebg})`,
                    }}
                  >
                    <img
                      src={profile.img}
                      alt={profile.name}
                      onClick={() => setModalOpen(true)}
                      className="profile-pic"
                    />
                  </div>
                  <div className="profile-details">
                    <div className="details-row">
                      <p>
                        <strong>Name:</strong> {profile.name}
                      </p>
                      <p>
                        <strong>Age:</strong> {profile.age}
                      </p>
                    </div>
                    <div className="details-row">
                      <p>
                        <strong>Place:</strong> {profile.Place}
                      </p>
                      <p>
                        <strong>Height:</strong> {profile.height}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
