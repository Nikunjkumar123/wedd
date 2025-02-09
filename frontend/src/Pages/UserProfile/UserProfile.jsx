import React, { useState, useRef, useEffect } from "react";
import ReactModal from "react-modal";
import "./userprofile.css";
import { useNavigate } from "react-router-dom";
import AvatarEditor from "react-avatar-editor";
import { Helmet } from "react-helmet";
import connectuser from "../../Assets/Testimonial5.png";
import axios from "axios";
import { axiosInstance } from "../Login/Loginpage";
import Swal from "sweetalert2";

ReactModal.setAppElement("#root");

const UserProfile = () => {
  const [disData, SetDisdata] = useState({
    _id: "",
    fullName: "",
    age: "",
    gender: "",
    fatherName: "",
    motherName: "",
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
    phone: "",
    email: "",
    image: "",
    area: "",
    city: "",
    state: "",
    pin: "",
    country: "",
    weddingBudget: "",
    weddingStyle: "",
    role: "",
    blockByADMIN: "",
    Verified: "",
    connections: [],
  });

  const [seeRqt, SetRqt] = useState([]);

  const displayUserDetail = async () => {
    const response = await axiosInstance.get("/api/v1/myprofile/viewProfile");
    SetDisdata(response.data.message);
  };
  const getConnectionRequest = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/v1/connectionRequest/forme"
      );
      SetRqt(response.data.requests);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (disData.fullName) {
      setFormData({
        name: disData.fullName,
        fatherName: disData.fatherName,
        motherName: disData.motherName,
        dob: disData.dob,
        phone: disData.phone,
        email: disData.email,
        gender: disData.gender,
        age: disData.age,
        height: disData.height,
        MarriedStatus: disData.maritalstatus,
        belong: disData.pehchan,
        sibling: disData.siblings,
        education: disData.education,
        working: disData.working,
        income: disData.annualIncome,
        address: disData.area,
        city: disData.city,
        pin: disData.pin,
        budget: disData.weddingBudget,
        style: disData.weddingStyle,
        familyHead: disData.FamilyHead,
      });
    }
  }, [disData]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    displayUserDetail();
    getConnectionRequest();
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
    height: "",
    MarriedStatus: "",
    belong: "",
    sibling: "DynamicData",
    education: "DynamicData",
    working: "DynamicData",
    income: "DynamicData",
    address: "DynamicAddress",
    city: "DynamicCity",
    pin: "DynamicPin",
    budget: "Dyamic Budget",
    style: "DynamicData",
    familyHead: "DynamicData",
  });

  // ====================================

  const [showAvatarEditor, setShowAvatarEditor] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const editorRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("Updated Data:", formData);

    try {
      const response = await axiosInstance.patch(
        "/api/v1/myprofile/viewProfile", // The API endpoint
        formData, // The data to be updated (formData)
        {
          headers: {
            "Content-Type": "application/json", // Set Content-Type header
          },
        }
      );
      SetDisdata(response.data.message);
      // console.log("API Response:", response.data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("There was an error updating the profile. Please try again.");
    }

    setShowModal(false); // Close the modal after submission
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setShowAvatarEditor(true);
    }
  };

  const handleSaveImage = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const croppedImage = canvas.toDataURL();
      setProfileImage(croppedImage); // Update the profile image
      setShowAvatarEditor(false); // Close the avatar editor
      // alert("Profile image updated successfully!");
    }
  };

  // ==================================
  //  User Connection Request

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openDetailsModal = (user) => {
    setSelectedUser(user);
    setDetailsModalIsOpen(true);
  };
  const closeDetailsModal = () => setDetailsModalIsOpen(false);

  const acceptRequest = async (id) => {
    try {
      const res = await axiosInstance.get(
        `/api/v1/connectionRequest/sendrq/accept/${id}`
      );
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectRequest = async (id) => {
    // console.log("id", id);
    await axiosInstance.get(`/api/v1/connectionRequest/sendrq/reject/${id}`);
    closeModal();
  };

  // ------------- Logout function --------------

  const navigate = useNavigate(); // Initialize navigation

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/logout",
        {},
        { withCredentials: true }
      );

      if (response.data.message === "Logged out successfully") {
        // Clear session
        document.cookie =
          "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        localStorage.removeItem("user");

        // Update state before navigation
        window.dispatchEvent(new Event("userStatusChanged"));

        // Redirect immediately to trigger re-render
        navigate("/");

        // Show SweetAlert2 (after navigation)
        Swal.fire({
          icon: "success",
          title: "Logout Successful!",
          text: "You have been logged out.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Logout Failed!",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Logout request failed.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>User Profile - {formData.name}</title>
        <meta
          name="description"
          content="User profile page with editable details and profile image."
        />
        <meta
          name="keywords"
          content="User Profile, React, Editable Profile, Avatar Editor"
        />
        <meta name="author" content="Your Name or Organization" />
      </Helmet>

      <section>
        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              {/* Profile Section */}
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={disData.image || "https://via.placeholder.com/150"}
                        alt="Admin"
                        className="rounded-circle profile-user-image"
                        width={200}
                      />

                      {/* <div className="d-flex justify-content-center align-items-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="btn btn-link"
                        />
                      </div> */}

                      <div className="profile-data mt-3">
                        <h4>{disData.fullName}</h4>
                        <p className="text-secondary mb-1">{disData.working}</p>
                        <p className="text-muted font-size-sm">
                          {disData.city}
                        </p>

                        <button
                          className="btn userprofile-logout"
                          onClick={handleLogout}
                        >
                          Log Out
                        </button>

                        <button
                          className="btn userprofile-creataccount"
                          onClick={() => {
                            setShowModal(true);
                            // editProfileUser()
                          }}
                        >
                          Edit Profile
                        </button>

                        <button
                          className="btn userprofile-logout mt-2"
                          onClick={openModal}
                        >
                          Connection Request
                        </button>
                        <div>
                          <button className="btn userprofile-creataccount mt-2">
                            My Connections
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Other Profile Details */}
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Father Name
                      </h6>
                      <span className="text-secondary">
                        {disData.fatherName}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Mother Name
                      </h6>
                      <span className="text-secondary">
                        {disData.motherName}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        DOB
                      </h6>
                      <span className="text-secondary">{disData.dob}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Phone
                      </h6>
                      <span className="text-secondary">{disData.phone}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Email
                      </h6>
                      <span className="text-secondary">{disData.email}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Avatar Editor Modal */}
              {showAvatarEditor && (
                <ReactModal
                  isOpen={showAvatarEditor}
                  onRequestClose={() => setShowAvatarEditor(false)}
                  className="modal-container"
                  overlayClassName="modal-overlay"
                >
                  <h2>Edit Profile Image</h2>
                  <AvatarEditor
                    ref={editorRef}
                    image={imageFile}
                    width={200}
                    height={200}
                    border={50}
                    borderRadius={100}
                    className="d-flex m-auto"
                    scale={1}
                    color={[255, 255, 255, 0.6]} // RGBA
                  />
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      className="btn save-change"
                      onClick={handleSaveImage}
                    >
                      Save Image
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setShowAvatarEditor(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </ReactModal>
              )}

              {/* Main Profile Data */}
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    {/* Profile Details */}
                    {Object.entries(formData)
                      .filter(
                        ([key]) =>
                          ![
                            "name",
                            "fatherName",
                            "motherName",
                            "dob",
                            "phone",
                            "email",
                          ].includes(key)
                      )
                      .map(([key, value]) => (
                        <div className="row" key={key}>
                          <div className="col-sm-3">
                            <h6 className="mb-0">
                              {key.replace(/_/g, " ").toUpperCase()}
                            </h6>
                          </div>
                          <div className="col-sm-9 text-secondary">{value}</div>
                          <hr />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        <ReactModal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          className="modal-container"
          overlayClassName="modal-overlay"
        >
          <h2>Edit Profile</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="row modal-row">
              {Object.entries(formData).map(([key, value]) => (
                <div className="col-md-4 mb-3" key={key}>
                  <div className="form-group">
                    <label htmlFor={key}>
                      {key.replace(/_/g, " ").toUpperCase()}
                    </label>
                    <input
                      type="text"
                      id={key}
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
              ))}

              <div className="form-group">
              <label htmlFor="updatepic">Update Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="btn btn-link"
               
              />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn save-change">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </ReactModal>

        {/* =========== User Connect Modal =========== */}

        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-style"
          overlayClassName="modal-overlay modal-overlay1"
          contentLabel="User Requests"
        >
          <button onClick={closeModal} className="modal-close-btn">
            &times;
          </button>

          <div className="container connection-main">
            {seeRqt.length > 0 ? (
              seeRqt.map((conn, index) => (
                <div key={index} className="profile-card">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src={conn.sender.image}
                        alt={conn.sender.fullName}
                        className="user-image"
                      />
                    </div>
                    <div className="col-md-4 text-start">
                      <p className="user-name">{conn.sender.fullName}</p>
                      <p>
                        Age:{" "}
                        <span className="text-secondary">
                          {conn.sender.age}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-6 text-start">
                      <p>
                        City:{" "}
                        <span className="text-secondary">
                          {conn.sender.city}
                        </span>
                      </p>

                      <p>
                        Work:{" "}
                        <span className="text-secondary">
                          {conn.sender.working}
                        </span>


                      </p>
                    </div>
                  </div>

                  <div className="request-actions">
                    <button
                      onClick={() => {
                        openDetailsModal(conn.sender);
                        acceptRequest(conn._id);
                      }}
                      className="accept-btn"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => rejectRequest(conn.sender.id)}
                      className="reject-btn"
                    >
                      Reject
                    </button>
                  </div>

                  <hr />
                </div>
              ))
            ) : (
              <p>No requests available.</p>
            )}
          </div>
        </ReactModal>

        {/* =========== My Connection =============== */}

        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-style"
          overlayClassName="modal-overlay modal-overlay1"
          contentLabel="User Requests"
        >
          <button onClick={closeModal} className="modal-close-btn">
            &times;
          </button>

          <div className="container connection-main">
            {seeRqt.length > 0 ? (
              seeRqt.map((conn, index) => (
                <div key={index} className="profile-card">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src={conn.sender.image}
                        alt={conn.sender.fullName}
                        className="user-image"
                      />
                    </div>
                    <div className="col-md-10 text-start">
                      <p className="user-name">{conn.sender.fullName}</p>
                      <p>
                        {conn.sender.fullName}{" "}
                        <span className="text-secondary">
                          has accept you request.
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="request-actions">
                    <button className="accept-btn">View Details</button>
                  </div>

                  <hr />
                </div>
              ))
            ) : (
              <p>No connection available.</p>
            )}
          </div>
        </ReactModal>

        {/* Second Modal - User Details */}
        <ReactModal
          isOpen={detailsModalIsOpen}
          onRequestClose={closeDetailsModal}
          className="modal-style"
          overlayClassName="modal-overlay modal-overlay1"
          contentLabel="User Details"
        >
          <button onClick={closeDetailsModal} className="modal-close-btn">
            &times;
          </button>

          {selectedUser && (
            <div className="container user-details-card">
              <h2 className="user-title">{selectedUser.fullName} Details</h2>

              <div className="user-info">
                <p>
                  <strong>Age:</strong> <span>{selectedUser.age}</span>
                </p>
                <p>
                  <strong>City:</strong> <span>{selectedUser.city}</span>
                </p>
                <p>
                  <strong>Work:</strong> <span>{selectedUser.working}</span>
                </p>
                <p>
                  <strong>Phone:</strong> <span>{selectedUser.phone}</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>{selectedUser.email}</span>
                </p>
                <p>
                  <strong>Marital Status:</strong>{" "}
                  <span>{selectedUser.maritalstatus}</span>
                </p>
              </div>
            </div>
          )}
        </ReactModal>
      </section>
    </>
  );
};

export default UserProfile;
