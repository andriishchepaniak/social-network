import React from 'react'
import './Post.css'

const Post = (props) => {

    return (

        <div className="card mt-3">
            <div className="media post">
                <img src="https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg" className="rounded-circle mt-3 ml-3" alt="Generic placeholder image"/>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">
                            {
                            props.author
                        }</h5>
                    </div>
                    <p className="card-text">
                        {
                        props.text
                    }</p>
                    <p className="card-text">
                        <small className="text-muted">
                            {
                            props.date
                        }</small>
                    </p>
                </div>


            </div>

        </div>
    )
}

export default Post
