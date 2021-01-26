import React from 'react'
import Post from '../../News/Post.js'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js'
import MyPosts from './MyPosts.js'
import { connect } from 'react-redux'
import { updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer.js'

// const MyPostsContainer = (props) => {
//     const myPosts = props.state.newsData.map(el => (
//         <Post author={
//                 el.author + el.id
//             }
//             text={
//                 el.text + el.id
//             }
//             date={
//                 "Posted at " + el.date
//             }/>
//     ))

//     let newPostText = props.state.textarea;

//     let addPost = () => {
//         props.dispatch(addPostActionCreator());
//     }

//     let updateNewPost = (newText) => {
//         props.dispatch(updateNewPostTextActionCreator(newText));
//     }

//     return(
//         <MyPosts myPosts={myPosts} 
//                  addPost={addPost}
//                  updateNewPost={updateNewPost}
//                  newPostText={newPostText}/>
//     )
// }

const mapStateToProps = (state) => {
    const myPosts = state.profilePage.newsData.map(el => (
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

    const newPostText = state.profilePage.textarea;

    return {
        myPosts: myPosts,
        newPostText: newPostText
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText));
        },

        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;