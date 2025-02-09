import React, { useEffect, useState } from "react";
import "./innerProfile.css";
import innerImage from "../../Assets/Testimonial3.png";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {axiosInstance} from "../Login/Loginpage";
Modal.setAppElement("#root");

const InnerProfile = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dis,SetDis] = useState({
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
    sibling: "",
    education: "",
    working: "",
    income: "",
    address: "",
    city: "",
    pin: "",
    budget: "",
    style: "",
    familyHead: "",
  })
  const { id } = useParams();

  const getDeT = async(req,res)=>{
    try {
      const response = await axiosInstance.get(`/api/v1/profiles/single/user/${id}`);
      console.log(response.data.user.fullName);
      SetDis(response.data.user)
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }
  const sendRequest = async (recipientId) => {
    try {
      const response = await axiosInstance.post('/api/v1/connectionRequest/sendrq', {
        recipientId, // Send recipientId in the request body
      }, {
        withCredentials: true, // Ensure cookies are sent if needed for authentication
      });
  
      console.log(response.data.msg); // Success message
      alert("Connection request sent successfully!");
    } catch (error) {
      console.error("Error sending request:", error.response?.data?.msg || error.message);
      alert(error.response?.data?.msg || "Something went wrong!");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getDeT();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="image-section">
            <img src={dis.image} alt="user-inner-image" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="left-data">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Full Name
                  </h6>
                  <span className="text-secondary">{dis.fullName}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Age
                  </h6>
                  <span className="text-secondary">{dis.age}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Gender
                  </h6>
                  <span className="text-secondary">{dis.gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Father Name
                  </h6>
                  <span className="text-secondary">{dis.fatherName}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Mother Name
                  </h6>
                  <span className="text-secondary">{dis.motherName}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Grand Father Name
                  </h6>
                  <span className="text-secondary">{dis.GrandFatherName}</span>
                </li>
               
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Height
                  </h6>
                  <span className="text-secondary">{dis.height}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Phone
                  </h6>
                  <span className="text-secondary">{dis.phone}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="center-data">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    DOB
                  </h6>
                  <span className="text-secondary">{dis.dob}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Marital Status
                  </h6>
                  <span className="text-secondary">{dis.maritalstatus}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Family Head
                  </h6>
                  <span className="text-secondary">{dis.FamilyHead}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Belongs
                  </h6>
                  <span className="text-secondary">{dis.pehchan}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    No. of Brothers
                  </h6>
                  <span className="text-secondary">{dis.siblings}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    No. of Sisters
                  </h6>
                  <span className="text-secondary">{dis.Sistersiblings}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Education
                  </h6>
                  <span className="text-secondary">{dis.education}</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Email
                  </h6>
                  <span className="text-secondary">{dis.email}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-data">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Working
                  </h6>
                  <span className="text-secondary">{dis.working}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Annual Income
                  </h6>
                  <span className="text-secondary">{dis.annualIncome}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    House
                  </h6>
                  <span className="text-secondary">{dis.house}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    City
                  </h6>
                  <span className="text-secondary">{dis.city}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Pin Code
                  </h6>
                  <span className="text-secondary">{dis.pin}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Country
                  </h6>
                  <span className="text-secondary">{dis.country}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Wedding Budget
                  </h6>
                  <span className="text-secondary">{dis.weddingBudget}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Wedding Style
                  </h6>
                  <span className="text-secondary">{dis.weddingStyle}</span>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="text-danger">
            Note: Send Connection Request to Persone for Access Contact Details.
          </h5>
          <div className="button-container my-3">
            <button className="viewall-btn" onClick={() => {sendRequest(dis._id); //setModalOpen(true) 
              }}>
              Connect Now
            </button>
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
          <h2>Connect Request</h2>
          <p>
            Before sending a connect request, check our plans.
          </p>
          <Link to="/member">
          <button
            style={{
              marginRight: "10px",
              padding: "8px 16px",
              background: "#800020",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => alert("Redirecting to Plan page...")}
          >
            Purchase Now
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
    </>
  );
};

export default InnerProfile;
