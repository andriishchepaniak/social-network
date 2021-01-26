const usersActionTypes = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW'
}

let initialState = {
    users: [
        {
            id: 1,
            fullName: "SomeOne",
            avatarUrl: "https://storage.jewheart.com/content/users/avatars/2536/avatar_2536_500.jpg?1558625366",
            status: "Some text",
            followed: true,
            location: {
                country: "Ukraine",
                city: "Lviv"
            }
        },
        {
            id: 2,
            fullName: "SomeOne Two",
            avatarUrl: "https://storage.jewheart.com/content/users/avatars/2536/avatar_2536_500.jpg?1558625366",
            status: "Some text two",
            followed: false,
            location: {
                country: "Ukraine",
                city: "Lviv"
            }
        },
        {
            id: 3,
            fullName: "SomeOne three",
            avatarUrl: "https://storage.jewheart.com/content/users/avatars/2536/avatar_2536_500.jpg?1558625366",
            status: "Some text three",
            followed: true,
            location: {
                country: "Ukraine",
                city: "Lviv"
            }
        },
        {
            id: 4,
            fullName: "SomeOne four",
            avatarUrl: "https://storage.jewheart.com/content/users/avatars/2536/avatar_2536_500.jpg?1558625366",
            status: "Some text",
            followed: true,
            location: {
                country: "Ukraine",
                city: "Lviv"
            }
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case usersActionTypes.FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case usersActionTypes.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => {
    return {
        type: usersActionTypes.FOLLOW,
        userId: userId
    }
}

export const unFollowActionCreator = (userId) => {
    return {
        type: usersActionTypes.UNFOLLOW, 
        userId: userId
    }
}

export default usersReducer;