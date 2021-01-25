import React from 'react'

const MyPosts = (props) => {
    let newPostText = props.newPostText;
    
    let addPostClick = () => {
        props.addPost();
    }

    let onUpdateNewTextChange = (e) => {
        let newText = e.target.value;
        props.updateNewPost(newText);
    }

    return (
        <div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">
                    <h2>My Posts</h2>
                </label>
                <textarea onChange={onUpdateNewTextChange} value={newPostText} className="form-control newPost-textarea" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button onClick={addPostClick} type="submit" className="btn btn-outline-info mt-2">Publish</button>
            </div>
            <div className="posts"> {props.myPosts} </div>
        </div>
    )
}

export default MyPosts
