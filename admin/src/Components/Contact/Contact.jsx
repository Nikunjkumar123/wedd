import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
// import './App.css'; // Ensure this path is correct

const Contact = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage] = useState(5)

    const getApiData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/api/v1/contact/user")
            console.log(res)
            setData(res.data.msg)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getApiData()
    }, [])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
    }

    // Calculate current items
    const offset = currentPage * itemsPerPage
    const currentPageData = data.slice(offset, offset + itemsPerPage)
    const pageCount = Math.ceil(data.length / itemsPerPage)

    return (
        <>
            <div className="container-fluid" style={{ marginTop: 80 }}>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className='text-center fs-4 mb-2'>Contact List</div>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>S No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPageData.map((item, index) =>
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.contact}</td>
                                            <td>{item.message}</td>
                                            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    )
                                }
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
        </>
    )
}

export default Contact
