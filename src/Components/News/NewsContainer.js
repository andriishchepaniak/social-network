import React from 'react'
import { connect } from 'react-redux'
import Post from '../News/Post.js'
import News from './News.js'

// const NewsContainer = (props) => {
//     const posts = props.state.newsData.map(el => (
//             <Post author={
//                 el.author + el.id
//             }
//             text={
//                 el.text + el.id
//             }
//             date={
//                 "Posted on " + el.date + el.id
//             }/>
//         ))
//     return (
//         <News posts = {posts} />
//     )
// }

const mapStateToProps = (state) => {
    const posts = state.newsPage.newsData.map(el => (
        <Post author={
            el.author + el.id
        }
        text={
            el.text + el.id
        }
        date={
            "Posted on " + el.date + el.id
        }/>
    ))
    return {
        posts: posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer
