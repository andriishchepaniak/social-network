import React from 'react'
import Post from '../News/Post.js'
import News from './News.js'

const NewsContainer = (props) => {
    const posts = props.state.newsData.map(el => (
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
    return (
        <News posts = {posts} />
    )
}

export default NewsContainer
