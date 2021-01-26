import React from 'react'
import { connect } from 'react-redux'
import { followActionCreator, unFollowActionCreator } from '../../redux/users-reducer.js'
import User from './User.js'
import Users from './Users.js'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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


export default connect(mapStateToProps, mapDispatchToProps)(Users);