import React from 'react'
import {NavLink} from 'react-router-dom'
import './DialogItem.css'


const DialogItem = (props) => {

    return (
        <NavLink className="link" to={"/dialogs/" + props.id}>
            <div className="card mt-3 btn btn-outline-info">
                <div className="media item">
                    <img src="https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg" className="rounded-circle mt-1 ml-1" alt="Generic placeholder image"/>
                    <div className="nav-link mt-2 ml-2 text">

                        {
                        props.firstName
                    }
                        {
                        props.lastName
                    } </div>

                </div>


            </div>
        </NavLink>
    )
}

export default DialogItem
