const dialogsActionTypes = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT'
}

const dialogsReducer = (state, action) => {
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