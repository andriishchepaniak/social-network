import React from 'react'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer.js'
import DialogItem from './DialogItem/DialogItem.js'
import SomeMessage from './Message/SomeMessage.js'
import YourMessage from './Message/YourMessage.js'
import "./Dialogs.css"

const Dialogs = (props) => {
    let dialogItems = props.dialogItems;
    let messages = props.messages;
    let messageText = props.newMessageText;

    let onChangeMessageText = (e) => {
        props.updateMessageText(e.target.value);
    }

    let sendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className="row justify-content-between">
            <div className="col-md-5">
                {dialogItems} </div>
            <div className="col-md-5 justify-content-center">
                <div className="align-bottom">
                    {messages}
                    <div className="input-group mt-3">
                        <textarea id="message-textarea" onChange={onChangeMessageText} value={messageText} className="form-control" placeholder="Enter your message"></textarea>
                        <div className="input-group-append">
                            <button onClick={sendMessageClick} className="btn btn-outline-info" type="button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
