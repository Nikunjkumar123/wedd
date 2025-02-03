import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTestimonial = () => {
    const [loading, setLoading] = useState(false)
    const { _id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        description: "",
        subdescription: "",
        date: "",
        image: ""
    });

    const getApiData = async () => {
        try {
            const res = await axios.get(`https://api.sitarammarriagebureau.com/api/success/${_id}`);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("subdescription", data.subdescription);
    formData.append("image", data.image);
    formData.append("date", data.date);

    const postData = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await axios.put(`https://api.sitarammarriagebureau.com/api/success/${_id}`, formData);
            console.log(res)
            if (res.status === 200) {
                toast.success("News&Events Updated Successfully");
                navigate("/success");
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
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
                    <h5 className='bg-dark p-2 text-light text-center'>Update Success Story</h5>
                    <div className="form-container">
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className=" mb-2">
                                    <label htmlFor="name" className="form-label">Description<sup className='text-danger'>*</sup></label>
                                    <textarea type="text" name="description" className="form-control" value={data.description} onChange={getInputData} placeholder='Description' />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="message" className="form-label">Sub Description<sup className='text-danger'>*</sup></label>
                                    <textarea type="text" name="subdescription" className="form-control" value={data.subdescription} onChange={getInputData} placeholder='sub Description' />
                                </div>
                                <div className="col-md-9 mb-2">
                                    <label htmlFor="image" className="form-label">Image<sup className='text-danger'>*</sup></label>
                                    <input type="file" name="image" className="form-control" onChange={getFileData} />
                                </div>
                                <div className="col-md-3 mb-2">
                                    <label htmlFor="message" className="form-label">Date<sup className='text-danger'>*</sup></label>
                                    <input type="text" name="date" className="form-control" value={data.date} onChange={getInputData} placeholder='Date' />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark w-100">{loading ? "Upadting..." : "Update Success Story"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTestimonial;
