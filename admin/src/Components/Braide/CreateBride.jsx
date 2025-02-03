// Frontend Code
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateBride = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name:"",
        bridename:"",
        image: ""
    });

    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const postData = async (e) => {
        e.preventDefault();
        if (!data.image) {
            toast.error("Please select an image");
            return;
        }
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("image", data.image);
            formData.append("name", data.name);
            formData.append("bridename", data.bridename);
            const res = await axios.post("https://api.sitarammarriagebureau.com/api/bride", formData);
            console.log(res)
            if (res.status === 200) {
                toast.success("Banner Created Successfully");
                navigate("/bride");
            }
        } catch (error) {
            toast.error(`${error.response?.data?.message || "An error occurred"}`);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h2 className='bg-dark p-2 text-light text-center'>Create Bride</h2>
                    <div className="form-container">
                        <form onSubmit={postData}>
                          <div className="row">
                          <div className="col-md-4 mb-2">
                                <label htmlFor="name" className="form-label">Name<sup className='text-danger'>*</sup></label>
                                <input type="text" name="name" className="form-control" onChange={getInputData} placeholder='Name'/>
                            </div>
                            <div className="col-md-4 mb-2">
                                <label htmlFor="name" className="form-label">Bride Name<sup className='text-danger'>*</sup></label>
                                <input type="text" name="bridename" className="form-control" onChange={getInputData} placeholder='Bride Name'/>
                            </div>
                            <div className="col-md-4 mb-2">
                                <label htmlFor="image" className="form-label">Bride Image<sup className='text-danger'>*</sup></label>
                                <input type="file" name="image" className="form-control" onChange={getFileData} />
                            </div>
                          </div>
                            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                                {loading ? "Loading..." : "Add Bride"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBride;
