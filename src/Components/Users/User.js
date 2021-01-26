import React from 'react'
import './User.css'

const User = (props) => {
    let followClick = (userId) => {
        props.follow(userId);
    }
    let unFollowClick = (userId) => {
        props.unFollow(userId);
    }

    return (
        <div className="card mb-3 pt-3 rounded-pill">
            <div className="media user">
                <img src={props.avatarUrl} className="rounded-circle mb-3 ml-3" 
                     alt="Generic placeholder image"/>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">
                            {
                            props.fullName
                        }</h5>
                    </div>
                    <p className="card-text">
                        {
                        props.status
                    }</p>
                    <p className="card-text">
                        <small className="text-muted">
                            location: {
                            props.location.city+ ",  " + props.location.country
                        }</small>
                    </p>
                    <div>
                        { props.followed 
                        ? <button onClick={() => {unFollowClick(props.id)}} type="button" className="btn btn-outline-info">UnFollow</button> 
                        : <button onClick={() => {followClick(props.id)}} type="button" className="btn btn-outline-info">Follow</button> }
                    </div>
                    
                </div>


            </div>

        </div>
    )
}


export default User;