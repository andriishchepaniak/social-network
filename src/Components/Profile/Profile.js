import React from 'react'
import HeaderProfile from './HeaderProfile/HeaderProfile.js'
import "./Profile.css"
import MyPostsContainer from './MyPosts/MyPostsContainer.js'

const Profile = (props) => {

    return (
        <div>
            <HeaderProfile firstName="Andrew" lastName="Shchepaniak" age="20" email="some@gmail.com"/>
            <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile
