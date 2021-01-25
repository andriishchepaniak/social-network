import React from 'react'
import './HeaderProfile.css'

const HeaderProfile = (props) => {

    return (
        <div className="row justify-content-around header-profile bg-white">
            <div className="col-md-3 mr-5">
                <img src="https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg" className="rounded-circle mt-3 ml-3" alt="Generic placeholder image"/>
                {/* <img src="https://i.imgur.com/cJecxKQ.jpg" className="rounded-circle mt-3 ml-3" alt="Generic placeholder image"/> */}
            </div>
            <div className="col-md-3 mt-5">
                <h2>{props.firstName} {props.lastName}</h2>
                <h4>Age: {props.age}</h4>
                <h4>Email: {props.email}</h4>
            </div>
        </div>
    )
}

export default HeaderProfile
