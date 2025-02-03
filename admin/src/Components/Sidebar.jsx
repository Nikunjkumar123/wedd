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
                <Link to="/users" className="list-group-item list-group-item-action list-group-item-light">Users</Link>
                {/* <Link to="/banner" className="list-group-item list-group-item-action list-group-item-primary">Planes</Link> */}
                {/* <Link to="/bride" className="list-group-item list-group-item-action list-group-item-light">Bride</Link> */}
                {/* <Link to="/success" className="list-group-item list-group-item-action list-group-item-light">News&Events</Link> */}
                <Link to="/contact" className="list-group-item list-group-item-action list-group-item-warning">Contact</Link>
            </div>
        </>
    )
}

export default Sidebar