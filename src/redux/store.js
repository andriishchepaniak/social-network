import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
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
        },
        newsPage: {
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
            ]
        },
        dialogsPage: {
            usersDialogs: [
                {
                    id: 1,
                    firstName: "First 1",
                    lastName: "Last 1"
                }, {
                    id: 2,
                    firstName: "First 2",
                    lastName: "Last 2"
                }, {
                    id: 3,
                    firstName: "First 3",
                    lastName: "Last 3"
                }, {
                    id: 4,
                    firstName: "First 4",
                    lastName: "Last 4"
                },
            ],
            messages: [
                {
                    id: 1,
                    message: "Some message 1"
                },
                {
                    id: 2,
                    message: "Some message 2"
                },
                {
                    id: 3,
                    message: "Some message 3"
                },
                {
                    id: 4,
                    message: "Some message 4"
                }, {
                    id: 5,
                    message: "Some message 5"
                }, {
                    id: 6,
                    message: "Some message 6"
                }
            ],
            messageText: ''
        }
    },

    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._callSubscriber(this._state)
    }
}

export default store;
