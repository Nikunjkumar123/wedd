import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateTestimonial = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        description: "",
        subdescription: "",
        date: "",
        image: ""
    });
    const [loading, setLoading] = useState(false);

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const postData = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("description", data.description);
            formData.append("subdescription", data.subdescription);
            formData.append("image", data.image);
            formData.append("date", data.date);

            const res = await axios.post("https://api.sitarammarriagebureau.com/api/success", formData);
            if (res.status === 200) {
                toast.success("Success Story Created Successfully");
                navigate("/success");
            }
        } catch (error) {
            console.log(error);
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
                    <h2 className=' bg-dark p-2 text-light text-center'>Create News&Events</h2>
                    <div className="form-container">
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className=" mb-2">
                                    <label htmlFor="name" className="form-label">Description<sup className='text-danger'>*</sup></label>
                                    <textarea name="description" className="form-control" onChange={getInputData} placeholder='Description' />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="message" className="form-label">Sub Description<sup className='text-danger'>*</sup></label>
                                    <textarea name="subdescription" className="form-control" onChange={getInputData} placeholder='sub Description' />
                                </div>
                                <div className="col-md-9 mb-2">
                                    <label htmlFor="image" className="form-label">Image<sup className='text-danger'>*</sup></label>
                                    <input type="file" name="image" className="form-control" onChange={getFileData} />
                                </div>
                                <div className="col-md-3 mb-2">
                                    <label htmlFor="message" className="form-label">Date<sup className='text-danger'>*</sup></label>
                                    <input type="text" name="date" className="form-control" onChange={getInputData} placeholder='Date' />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                                {loading ? "Loading..." : "Add News&Events"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTestimonial;
