import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {

    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <NavLink className="nav-link active" to="/">News</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/friends">Friends</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/messages">Messages</NavLink>
            </li>
        </ul>
    )
}

export default Navigation
