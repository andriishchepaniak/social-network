import React from 'react'
import Post from '../News/Post.js'

const News = (props) => {

    return (
        <div>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            {props.posts}
            
        </div>

    )
}

export default News
