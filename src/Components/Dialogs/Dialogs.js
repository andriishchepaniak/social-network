import React from 'react'
import DialogItem from './DialogItem.js'

const Dialogs = (props) => {
    var users = []
    for (let i = 0; i < 6; i++) {
        users[i] = {
            id: i + 1,
            firstName: "First ",
            lastName: "Last "
        }

    }
    const dialogItems = users.map(el => (
        <DialogItem firstName={
                el.firstName + el.id
            }
            lastName={
                el.lastName + el.id
            }/>


    ))
    return (
        <div>
            <div> {dialogItems} </div>
        </div>
    )
}

export default Dialogs
