const profileActionTypes = {
    ADD_POST: 'ADD_POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE_NEW_POST_TEXT'
}

let initialState = {
    newsData: [
        {
            id: 1,
            author: "Author 1",
            text: "Some text 1",
            date: "date 1"
        }, {
            id: 2,
            author: "Author 2",
            text: "Some text 2",
            date: "date 2"
        }, {
            id: 3,
            author: "Author 3",
            text: "Some text 3",
            date: "date 3"
        }, {
            id: 4,
            author: "Author 4",
            text: "Some text 4",
            date: "date 4"
        }
    ],
    textarea: ''
}

const profileReducer = (state = initialState, action) => {
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
            return {
                ...state,
                newsData: [newPost, ...state.newsData],
                textarea: ''
            }
        case profileActionTypes.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                textarea: action.newText
            }
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