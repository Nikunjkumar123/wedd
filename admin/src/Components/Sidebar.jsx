import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const loginvalue = sessionStorage.getItem("login")
    return (
        <>
            <div className="list-group" style={{}}>
               {
                loginvalue? <Link to="/home" className="list-group-item list-group-item-action">Home</Link>:
                <Link to="/" className="list-group-item list-group-item-action">Home</Link>
               }
                {/* <Link to="/banner" className="list-group-item list-group-item-action list-group-item-primary">Banner</Link> */}
                <Link to="/users" className="list-group-item list-group-item-action list-group-item-light">Users</Link>
                <Link to="/bride" className="list-group-item list-group-item-action list-group-item-light">Connections</Link>
                {/* <Link to="/success" className="list-group-item list-group-item-action list-group-item-light">News&Events</Link> */}
                <Link to="/contact" className="list-group-item list-group-item-action list-group-item-light">Contact</Link>
            </div>
        </>
    )
}

export default Sidebar