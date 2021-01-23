import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

    return (
        <ul className="nav flex-column navigation">
            <li className="nav-item">
                <NavLink className="nav-link" to="/news">News</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/friends">Friends</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/dialogs">Dialogs</NavLink>
            </li>
        </ul>
    )
}

export default Navigation
