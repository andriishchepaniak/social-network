import React from 'react'
import Post from '../News/Post.js'

const News = (props) => {
    const postsArr = props.posts.map(el => (
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
        <div>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            {postsArr}
            
        </div>

    )
}

export default News
