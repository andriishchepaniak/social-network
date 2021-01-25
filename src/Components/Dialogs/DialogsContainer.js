import React from 'react'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer.js'
import DialogItem from './DialogItem/DialogItem.js'
import SomeMessage from './Message/SomeMessage.js'
import YourMessage from './Message/YourMessage.js'
import Dialogs from './Dialogs.js'


const DialogsContainer = (props) => {

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

    let updateMessageText = (newText) => {
        props.dispatch(updateNewMessageTextActionCreator(newText))
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <Dialogs dialogItems={dialogItems}
                messages = {messages}
                newMessageText={props.state.messageText}
                updateMessageText={updateMessageText}
                sendMessage={sendMessage}/>
    )
}

export default DialogsContainer
