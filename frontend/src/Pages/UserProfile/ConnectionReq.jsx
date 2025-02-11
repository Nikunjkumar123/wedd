import React from "react";
import testimonail from "../../Assets/Testimonail.png";
import "./ConnectionReq.css"; // Add this CSS file for styling

const ConnectionReq = () => {
  const userRequests = [
    {
      id: 1,
      name: "Adil",
      gender: "Male",
      age: 21,
      city: "Delhi",
      work: "Doctor",
    },
    {
      id: 2,
      name: "Sara",
      gender: "Female",
      age: 25,
      city: "Mumbai",
      work: "Engineer",
    },
    {
      id: 3,
      name: "John",
      gender: "Male",
      age: 29,
      city: "Bangalore",
      work: "Designer",
    },
    {
      id: 4,
      name: "Ayesha",
      gender: "Female",
      age: 23,
      city: "Kolkata",
      work: "Teacher",
    },
    {
      id: 5,
      name: "Rahul",
      gender: "Male",
      age: 27,
      city: "Pune",
      work: "Developer",
    },
    {
      id: 6,
      name: "Neha",
      gender: "Female",
      age: 26,
      city: "Hyderabad",
      work: "Lawyer",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="connecReq-maindiv">
              <h4 className="text-center my-3">Connection Requests</h4>
              <div className="request-list">
                {userRequests.map((user) => (
                  <div key={user.id} className="request-data">
                    <div className="req-image">
                      <img src={testimonail} alt="User" />
                      <p>{user.name} has sent you a connection request.</p>
                    </div>
                    <div className="req-user-data row">
                      <div className="col-md-3 col-6">
                        <strong>Gender:</strong> <p>{user.gender}</p>
                      </div>
                      <div className="col-md-3 col-6">
                        <strong>Age:</strong> <p>{user.age}</p>
                      </div>
                      <div className="col-md-3 col-6">
                        <strong>City:</strong> <p>{user.city}</p>
                      </div>
                      <div className="col-md-3 col-6">
                        <strong>Work:</strong> <p>{user.work}</p>
                      </div>
                    </div>
                    <div className="request-actions">
                      <button className="accept-btn">Accept</button>
                      <button className="reject-btn">Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectionReq;
