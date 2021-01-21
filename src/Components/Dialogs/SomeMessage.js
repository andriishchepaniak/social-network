import React from 'react'


const SomeMessage = (props) => {

    return (<div className="messages mt-2 float-none">
        <div className="media item ">
            <img src="https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg" className="rounded-circle mt-1 ml-1" alt="Generic placeholder image"/>
            <div className="mt-2 ml-2"> {
                props.message
            } </div>

        </div>


    </div>)
}

export default SomeMessage