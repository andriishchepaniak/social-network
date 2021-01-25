const dialogsActionTypes = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT'
}

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case dialogsActionTypes.SEND_MESSAGE:
            let message = {
                id: state.messages.length + 1,
                message: state.messageText
            };
    
            state.messages.push(message);
            state.messageText = '';
            return state;
        case dialogsActionTypes.UPDATE_NEW_MESSAGE_TEXT:
            state.messageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: dialogsActionTypes.SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (newMessageText) => {
    return {
        type: dialogsActionTypes.UPDATE_NEW_MESSAGE_TEXT, 
        newMessageText: newMessageText
    }
}

export default dialogsReducer;