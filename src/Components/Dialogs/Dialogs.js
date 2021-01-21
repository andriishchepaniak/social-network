import React from 'react'
import DialogItem from './DialogItem.js'
import SomeMessage from './SomeMessage.js'
import YourMessage from './YourMessage.js'

const Dialogs = (props) => {

    const dialogItems = props.usersDialogs.map(el => (<DialogItem id={
                el.id
            }
            firstName={
                el.firstName + el.id
            }
            lastName={
                el.lastName + el.id
            }/>))

    const messages = props.messages.map(el => {
        if(el.id % 2 === 0){
            // return (<YourMessage message={el.message + el.id} />)
            return (<SomeMessage message={el.message + el.id} />)
        }
        else{
            //return (<SomeMessage message={el.message + el.id} />)
            return (<YourMessage message={el.message + el.id} />)
        }
    })   

    //const messages = props.messages.map(el => (<YourMessage message={el.message + el.id} />))
    
    return (<div className="row justify-content-between">
        <div className="col-md-5"> {dialogItems} </div>
        <div className="col-md-5 justify-content-center"> 
            {messages}
            <div class="input-group mt-3">
                <input type="text" class="form-control" placeholder="Enter your message" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Send</button>
                    </div>
                </div>
            </div>
        </div>
        )
        }
        
export default Dialogs
