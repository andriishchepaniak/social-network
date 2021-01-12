import React from 'react'
import Post from '../News/Post.js'

const News = (props) => {
    var news = []
    for (let i = 0; i < 5; i++) {
        news[i] = {
            id: i + 1,
            author: "Author ",
            text: "Some text ",
            date: "date "
        }

    }
    const newsjsx = news.map(el => (
        <Post author={
                el.author + el.id
            }
            text={
                el.text + el.id
            }
            date={
                "Posted at " + el.date + el.id
            }/>


    ))
    return (
        <div>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            { newsjsx } 
        </div>

    )
}

export default News
