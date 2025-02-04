// Frontend Code
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateBanner = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        image: ""
    });

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
            const res = await axios.post("https://api.sitarammarriagebureau.com/api/banner", formData);
            console.log(res)
            if (res.status === 200) {
                toast.success("Banner Created Successfully");
                navigate("/banner");
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
                    <h2 className='bg-dark p-2 text-light text-center'>Create Banner</h2>
                    <div className="form-container">
                        <form onSubmit={postData}>
                            <div className="mb-2">
                                <label htmlFor="image" className="form-label">Banner Image<sup className='text-danger'>*</sup></label>
                                <input type="file" name="image" className="form-control" onChange={getFileData} />
                            </div>
                            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                                {loading ? "Loading..." : "Add Banner"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBanner;
