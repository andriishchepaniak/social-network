import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-reducer.js'
import Post from '../News/Post.js'
import HeaderProfile from '../Profile/HeaderProfile.js'
import "./Profile.css"

const Profile = (props) => {
    const postsArr = props.state.newsData.map(el => (
        <Post author={
                el.author + el.id
            }
            text={
                el.text + el.id
            }
            date={
                "Posted at " + el.date
            }/>
    ))

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChange = (e) => {
        props.dispatch(updateNewPostTextActionCreator(e.target.value));
    }

    return (
        <div>
            <HeaderProfile firstName="Andrew" lastName="Shchepaniak" age="20" email="some@gmail.com"/>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">
                    <h2>My Posts</h2>
                </label>
                <textarea onChange={onChange} value={props.state.textarea} className="form-control newPost-textarea" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button onClick={addPost} type="submit" className="btn btn-outline-info mt-2">Publish</button>
            </div>
            <div className="posts"> {postsArr} </div>
        </div>
    )
}

export default Profile
