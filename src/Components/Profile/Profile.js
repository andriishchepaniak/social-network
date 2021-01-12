import React from 'react'
import Post from '../News/Post.js'
import HeaderProfile from '../Profile/HeaderProfile.js'

const Profile = (props) => {
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
            <HeaderProfile firstName="Andrew" lastName="Shchepaniak" age="20" email="some@gmail.com"/>
            <div>
                { newsjsx } 
            </div>
        </div>  
    )
}

export default Profile
