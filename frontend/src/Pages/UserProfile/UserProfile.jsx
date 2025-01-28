import React, { useState, useRef, useEffect } from "react";
import ReactModal from "react-modal";
import "./userprofile.css";
import { Link } from "react-router-dom";
import AvatarEditor from "react-avatar-editor";
import { Helmet } from "react-helmet";
import connectuser from "../../Assets/Testimonial5.png";

ReactModal.setAppElement("#root");

const UserProfile = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "Asif",
    fatherName: "DynamicName",
    motherName: "DynamicName",
    dob: "DynamicDate",
    phone: "DynamicPhone",
    email: "DynamicEmail",
    gender: "DynamicData",
    age: "Dynamicage",
    height: "DynamicData",
    MarriedStatus: "DynamicData",
    belong: "DynamicData",
    sibling: "DynamicData",
    education: "DynamicData",
    working: "DynamicData",
    income: "DynamicData",
    address: "DynamicAddress",
    city: "DyanamicCity",
    pin: "DyanamicPin",
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    alert("Profile updated successfully!");
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
      alert("Profile image updated successfully!");
    }
  };

  // ==================================
  //  User Connection Request

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Sample user data
  const user =  {
    img: connectuser,
    name: "Shruti",
    age: "22",
    working: "Software Eng.",
    location: "Delhi",
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const acceptRequest = () => {
    alert("Connection Request Accepted!");
    closeModal();
  };

  const rejectRequest = () => {
    alert("Connection Request Rejected!");
    closeModal();
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
                        src={profileImage || "https://via.placeholder.com/150"}
                        alt="Admin"
                        className="rounded-circle"
                        width={200}
                      />

                      <div className="d-flex justify-content-center align-items-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="btn btn-link"
                        />
                      </div>

                      <div className="profile-data mt-3">
                        <h4>{formData.name}</h4>
                        <p className="text-secondary mb-1">
                          {formData.working}
                        </p>
                        <p className="text-muted font-size-sm">
                          {formData.city}
                        </p>

                        <Link to="/">
                          <button className="btn userprofile-logout">
                            Log Out
                          </button>
                        </Link>
                        <button
                          className="btn userprofile-creataccount"
                          onClick={() => setShowModal(true)}
                        >
                          Edit Profile
                        </button>

                        <button
                          className="btn userprofile-creataccount mt-2"
                          onClick={openModal}
                        >
                          Connection Request
                        </button>
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
                        {formData.fatherName}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Mother Name
                      </h6>
                      <span className="text-secondary">
                        {formData.motherName}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        DOB
                      </h6>
                      <span className="text-secondary">{formData.dob}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Phone
                      </h6>
                      <span className="text-secondary">{formData.phone}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Email
                      </h6>
                      <span className="text-secondary">{formData.email}</span>
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
              {Object.entries(formData).map(([key, value], index) => (
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
          overlayClassName="modal-overlay modal-overlay1 "
          contentLabel="User Details Modal"
        >
          <button onClick={closeModal} className="modal-close-btn">
            &times;
          </button>
          <div className="container connection-main">
            <div className="row align-items-center">
            
              <div className="col-md-2">
                <img src={user.img} alt={user.name} className="user-image" />
              </div>
              <div className="col-md-4 text-start">
                <p className="user-name">{user.name}</p>
                <p>
                  Age: <span className="text-secondary">{user.age}</span>
                </p>
              </div>
              <div className="col-md-6 text-start">
                <p>
                  City: <span className="text-secondary">{user.location}</span>
                </p>
                <p>
                  Work: <span className="text-secondary">{user.working}</span>
                </p>
              </div>
            </div>
            </div>
          

          <div className="request-actions">
            <button onClick={acceptRequest} className="accept-btn">
              Accept
            </button>
            <button onClick={rejectRequest} className="reject-btn">
              Reject
            </button>
          </div>
        </ReactModal>
      </section>
    </>
  );
};

export default UserProfile;
