import React, { useEffect, useState } from 'react'
import './Userdetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Userdetails = () => {
    const [data, setData] = useState({})
    const {_id} = useParams()
    const getApiData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/api/v1/adminPanel/user/" + _id)
            // console.log(res.data.user);
            setData(res.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getApiData();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);

    return (
        <>
            {/* <h2 style={{ marginTop: 100 }}>Home</h2> */}
            <div className="full-details-container mt-5">
                <h2 className='text-center'>Full Informations</h2>
                <div className="table-containerfirst">
                    <table className='table table-bordered table-striped table-hover tablweidth'>
                        <tbody>
                            <tr>
                                <th colSpan={3} style={{ color: "orange" }}>PERSONAL INFORMATION</th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{data.fullName}</td>
                            </tr>
                            <tr>
                                <th>Father Name</th>
                                <td>{data.fatherName}</td>
                            </tr>
                            <tr>
                                <th>Mother Name</th>
                                <td>{data.motherName}</td>
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
                                <td>{data.dob}</td>
                            </tr>
                            <tr>
                                <th>Height</th>
                                <td>{data.height}</td>
                            </tr>
                            <tr>
                                <th>Siblings</th>
                                <td>{data.siblings}</td>
                            </tr>

                        </tbody>
                    </table>
                    <div className='imagediv'>
                        <a href={data.image} target="_blank" rel="noopener noreferrer">
                            <img src={data.image} alt={data.name} className="profile-image" />
                        </a>
                    </div>
                </div>

                <div className="table-container">
                    <table className='table table-bordered table-striped table-hover  '>
                        <tbody>
                            <tr>
                                <th colSpan={6} style={{ color: "orange" }}>CONTACT DETAILS</th>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td colSpan={2}>{data.email}</td>
                                <th>Phone</th>
                                <td colSpan={2}>{data.email}</td>
                            </tr>
                            {/* <tr>
                                <th colSpan={6} style={{ color: "orange" }}>Religious & Social Background</th>
                            </tr> */}
                            {/* <tr>
                                <th>Religion</th>
                                <td>{data.religion}</td>
                                <th>Cast</th>
                                <td>{data.cast}</td>
                                <th>Sub Cast</th>
                                <td>{data.subcast}</td>
                            </tr> */}
                            {/* <tr>
                                <th colSpan={6} style={{ color: "orange" }}>Gotra Information</th>
                            </tr>
                            <tr>
                                <th>Self Gotra</th>
                                <td>{data.gotra}</td>
                                <th>Mother gotra</th>
                                <td>{data.mgotra}</td>
                                <th>Grand Mother Gotra</th>
                                <td>{data.ggotra}</td>
                            </tr> */}
                            <tr>
                                <th colSpan={6} style={{ color: "orange" }}>Education Information</th>
                            </tr>
                            <tr>
                                <th>Highest Education</th>
                                <td>{data.education}</td>
                                <th>Company Name</th>
                                <td>{data.companyname}</td>
                                <th>Annual Income</th>
                                <td>{data.annualIncome}</td>
                            </tr>
                            <tr>
                                <th colSpan={6} style={{ color: "orange" }}>Location / Residence</th>
                            </tr>
                            {/* <tr>
                                <th>Address</th>
                                <td>{data.address}</td>
                            </tr> */}
                            <tr>
                                <th>Pin</th>
                                <td>{data.pin}</td>
                                <th>City</th>
                                <td>{data.city}</td>
                                <th>State</th>
                                <td>{data.state}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Userdetails