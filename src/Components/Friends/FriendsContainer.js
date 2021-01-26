import React from 'react'
import { connect } from 'react-redux'
import { followActionCreator, unFollowActionCreator } from '../../redux/users-reducer.js'
import Friends from './Friends.js'

const mapStateToProps = (state) => {
    let users = [];
    // let users = state.usersPage.users.map(user => {
    //     if(user.followed === true){
    //         return user;
    //     }
    // }) 
    //Error: cannot read property 'id' of undefined
    // Some of array is undefined(because "map")

    for (const user of state.usersPage.users) {
        if(user.followed === true){
            users.push(user);
        }
    }

    // state.usersPage.users.forEach(user => {
    //     if(user.followed === true){
    //         users.push(user);
    //     }
    // });
    return {
        users: users
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },

        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Friends);