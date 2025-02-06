import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBanner = () => {
    const { _id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ image: "" });
    const [loading, setLoading] = useState(false); // Add loading state

    const getApiData = async () => {
        try {
            const res = await axios.get(`https://api.sitarammarriagebureau.com/api/banner/${_id}`);
            console.log(res);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const formData = new FormData();
    formData.append("image", data.image);

    const postData = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the request starts
        try {
            const res = await axios.put(`https://api.sitarammarriagebureau.com/api/banner/${_id}`, formData);
            console.log(res);
            if (res.status === 200) {
                toast.success("Banner Updated Successfully");
                navigate("/banner");
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
                            <div className="mb-2">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input type="file" name="image" className="form-control" onChange={getFileData} />
                            </div>
                            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                                {loading ? "Updating..." : "Update Banner"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBanner;
