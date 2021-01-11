import React from 'react'

const Post = (props) => {

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{props.author}</h5>
                <p className="card-text">{props.text}</p>
                <p className="card-text">
                    <small className="text-muted">{props.date}</small>
                </p>
            </div>
        </div>
    )
}
            
export default Post
