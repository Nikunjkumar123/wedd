import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
// import './App.css'; // Ensure this path is correct

const Testimonial = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(3);

    const deleteRecord = async (_id) => {
        try {
            const res = await axios.delete(`https://api.sitarammarriagebureau.com/api/success/${_id}`)
            if (res.status === 200) {
                toast.success("Success Story Deleted Successfully");
                getApiData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getApiData = async () => {
        try {
            const res = await axios.get("https://api.sitarammarriagebureau.com/api/success");
            const newData = res.data.data;
            setData(newData.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    // Calculate current items
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    return (
        <div className="container-fluid" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9 mb-5">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5 className='bg-dark p-2 text-light text-center'>News&Events</h5>
                        <Link to='/createsuccess' className='btn btn-dark'>News&Events</Link>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Description</th>
                                <th>Sub Description</th>
                                <th>Image</th>
                                <th>Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPageData.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1 + offset}</td>
                                    <td>{item.description}</td>
                                    <td>{item.subdescription}</td>
                                    <td><img src={item.image} alt="" style={{ height: 50 }} /></td>
                                    <td>{item.date}</td>
                                    <td><Link to={`/updatesuccess/${item._id}`} className='btn btn-success'>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={() => deleteRecord(item._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
