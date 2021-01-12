import React from 'react'
import './DialogItem.css'


const DialogItem = (props) => {

    return (
        <div className="col-md-12">
            <div className="card mt-3 btn btn-outline-info">
                <div className="media item ">
                    <img src="https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg" className="rounded-circle mt-1 ml-1" alt="Generic placeholder image"/>
                    <div className="mt-2 ml-2">
                        {
                        props.firstName
                    }
                        {
                        props.lastName
                    } </div>

                </div>
            </div>

        </div>
    )
}

export default DialogItem
