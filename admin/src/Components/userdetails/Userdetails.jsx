import React, { useEffect, useState } from "react";
import "./Userdetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const Userdetails = () => {
  const [data, setData] = useState({});
  const { _id } = useParams();
  const getApiData = async () => {
    try {
      let res = await axios.get(
        "http://localhost:3000/api/v1/adminPanel/updateUser/" + _id // it will get single user , dont update user only a name in api url
      );
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* <h2 style={{ marginTop: 100 }}>Home</h2> */}
      <div className="full-details-container mt-5">
        <h2 className="text-center">Full Informations</h2>
        <div className="table-containerfirst">
          <table className="table table-bordered table-striped table-hover tablweidth">
            <tbody>
              <tr>
                <th colSpan={3} style={{ color: "Maroon" }}>
                  PERSONAL INFORMATION
                </th>
              </tr>
              <tr>
                <th>Full Name</th>
                <td>{data.name}</td>
              </tr>
              <tr>
                <th>Father Name</th>
                <td>{data.fathername}</td>
              </tr>
              <tr>
                <th>Mother Name</th>
                <td>{data.mothername}</td>
              </tr>
              <tr>
                <th>Grand Father Name</th>
                <td>{data.birthplace}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{data.gender}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{data.age}</td>
              </tr>
              <tr>
                <th>Date Of Birth</th>
                <td>{data.dateofbirth}</td>
              </tr>

              <tr>
                <th>Height</th>
                <td>{data.height}</td>
              </tr>
              <tr>
                <th>No. of Brother</th>
                <td>{data.siblings}</td>
              </tr>
              <tr>
                <th>No. of Sister</th>
                <td>{data.siblings}</td>
              </tr>
            </tbody>
          </table>
          <div className="imagediv">
            <a href={data.image} target="_blank" rel="noopener noreferrer">
              <img src={data.image} alt={data.name} className="profile-image" />
            </a>
          </div>
        </div>

        <div className="table-container">
          <table className="table table-bordered table-striped table-hover  ">
            <tbody>
              <tr>
                <th colSpan={8} style={{ color: "Maroon" }}>
                  MORE DETAILS
                </th>
              </tr>
              <tr>
                <th>Family Head</th>
                <td>{data.email}</td>
                <th>Family Occupation Head</th>
                <td>{data.email}</td>
                <th>Married Status</th>
                <td>{data.email}</td>
              </tr>
             
              <tr>
                <th>Belong</th>
                <td>{data.email}</td>
                <th>Education</th>
                <td>{data.email}</td>
                <th>Working</th>
                <td>{data.email}</td>
              </tr>
              
              <tr>
                <th>Annual Income</th>
                <td colSpan={2}>{data.email}</td>
                <th>House</th>
                <td colSpan={2}>{data.email}</td>
               
              </tr>
              <tr>
                <th colSpan={8} style={{ color: "Maroon" }}>
                  CONTACT DETAILS
                </th>
              </tr>
              <tr>
                <th>Email</th>
                <td colSpan={2}>{data.email}</td>
                <th>Phone</th>
                <td colSpan={2}>{data.email}</td>
              </tr>
              <tr>
                <th colSpan={8} style={{ color: "Maroon" }}>
                  WEDDING DETAILS
                </th>
              </tr>
              <tr>
                <th>Wedding Style</th>
                <td colSpan={2}>{data.religion}</td>
                <th>Wedding Budget</th>
                <td colSpan={2}>{data.cast}</td>
                
              </tr>
        
              <tr>
                <th colSpan={8} style={{ color: "Maroon" }}>
                  Location / Residence
                </th>
              </tr>
              <tr>
                <th>Area</th>
                <td>{data.address}</td>
                <th>City</th>
                <td>{data.address}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>{data.pin}</td>
                <th>Pin Code</th>
                <td>{data.city}</td>
                <th>Country</th>
                <td>{data.state}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Userdetails;
