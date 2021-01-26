import {combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer.js'
import dialogsReducer from './dialogs-reducer.js'
import newsReducer from './news-reducer.js'
import usersReducer from './users-reducer.js';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;