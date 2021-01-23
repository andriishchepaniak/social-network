import React from 'react'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer.js'
import DialogItem from './DialogItem.js'
import SomeMessage from './SomeMessage.js'
import YourMessage from './YourMessage.js'
import "./Dialogs.css"

const Dialogs = (props) => {

    const dialogItems = props.state.usersDialogs.map(el => (
        <DialogItem id={
                el.id
            }
            firstName={
                el.firstName + el.id
            }
            lastName={
                el.lastName + el.id
            }/>
    ))

    const messages = props.state.messages.map(el => {
        if (el.id % 2 === 0) { // return (<YourMessage message={el.message + el.id} />)
            return (
                <SomeMessage message={
                    el.message + el.id
                }/>
            )
        } else { // return (<SomeMessage message={el.message + el.id} />)
            return (
                <YourMessage message={
                    el.message + el.id
                }/>
            )
        }
    })

    let onChangeMessageText = (e) => {
        props.dispatch(updateNewMessageTextActionCreator(e.target.value))
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <div className="row justify-content-between">
            <div className="col-md-5">
                {dialogItems} </div>
            <div className="col-md-5 justify-content-center">
                <div className="align-bottom">
                    {messages}
                    <div className="input-group mt-3">
                        <textarea id="message-textarea" onChange={onChangeMessageText} value={props.state.messageText} className="form-control" placeholder="Enter your message"></textarea>
                        <div className="input-group-append">
                            <button onClick={sendMessage} className="btn btn-outline-info" type="button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
