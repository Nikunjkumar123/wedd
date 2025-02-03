import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBride = () => {
    const { _id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ 
        name:"",
        bridename:"",
        image: "" });
    const [loading, setLoading] = useState(false); 

    const getApiData = async () => {
        try {
            const res = await axios.get(`https://api.sitarammarriagebureau.com/api/bride/${_id}`);
            console.log(res);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("bridename", data.bridename);

    const postData = async (e) => {
        e.preventDefault();
        setLoading(true); 
        try {
            const res = await axios.put(`https://api.sitarammarriagebureau.com/api/bride/${_id}`, formData);
            console.log(res);
            if (res.status === 200) {
                toast.success("Banner Updated Successfully");
                navigate("/bride");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading to false when the request completes
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className="container-fluid" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h5 className='bg-dark p-2 text-light text-center'>Update Banner</h5>
                    <div className="form-container">
                        <form onSubmit={postData}>
                        <div className="row">
                          <div className="col-md-4 mb-2">
                                <label htmlFor="name" className="form-label">Name<sup className='text-danger'>*</sup></label>
                                <input type="text" name="name" className="form-control" value={data.name} onChange={getInputData} placeholder='Name'/>
                            </div>
                            <div className="col-md-4 mb-2">
                                <label htmlFor="name" className="form-label">Bride Name<sup className='text-danger'>*</sup></label>
                                <input type="text" name="bridename" className="form-control" value={data.bridename} onChange={getInputData} placeholder='Bride Name'/>
                            </div>
                            <div className="col-md-4 mb-2">
                                <label htmlFor="image" className="form-label">Bride Image<sup className='text-danger'>*</sup></label>
                                <input type="file" name="image" className="form-control" onChange={getFileData} />
                            </div>
                          </div>
                            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                                {loading ? "Updating..." : "Update Bride"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBride;
