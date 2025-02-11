import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const naviget = useNavigate()
    const logout = () => {
        sessionStorage.clear()
        naviget("/login")
        window.location.reload()
    }
    const loginvalue = sessionStorage.getItem("login")
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bg fixed-top">
            <div className="container-fluid">
                {
                    loginvalue ? <Link className="navbar-brand text-light" to="/home">Muslim Malik Rishte</Link> :
                        <Link className="navbar-brand text-light" to="/">Muslim Malik Rishte</Link>
                }
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {loginvalue ? <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/home">Home</Link>
                        </li> : ""
                        }
                    </ul>
                    <ul style={{ display: "flex", listStyle: "none", fontSize: "25px", color: "white" }}>
                        {loginvalue ? <li><button onClick={logout} className="btn btn-secondary text-light">Logout</button>
                        </li> :
                            <li> <Link to='/login' style={{ textDecoration: "none" }}><i class="ri-login-circle-line text-light"></i></Link></li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
