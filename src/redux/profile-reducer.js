const profileActionTypes = {
    ADD_POST: 'ADD_POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE_NEW_POST_TEXT'
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case profileActionTypes.ADD_POST:
            let today = '';
            today = new Date().toLocaleTimeString();
            today = today + '       ' + new Date().toLocaleDateString();
            let newPost = {
                id: state.newsData.length + 1,
                author: "me",
                text: state.textarea,
                date: today
            };

            state.newsData.push(newPost);
            state.textarea = '';
            return state;
        case profileActionTypes.UPDATE_NEW_POST_TEXT:
            state.textarea = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: profileActionTypes.ADD_POST
    }
}

export const updateNewPostTextActionCreator = (newPostText) => {
    return {
        type: profileActionTypes.UPDATE_NEW_POST_TEXT, 
        newText: newPostText
    }
}

export default profileReducer;