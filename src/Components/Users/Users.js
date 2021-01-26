import React from "react"
import User from './User.js'

const Users = (props) => {
    let users = props.users.map(user => (
        <User id = {user.id}
              avatarUrl={user.avatarUrl}
              fullName={user.fullName}
              status={user.status}
              location={user.location}
              followed={user.followed}
              follow={props.follow}
              unFollow={props.unFollow}/>
    ));
    return (
        <div>
            {users}
        </div>
    )
}

export default Users;