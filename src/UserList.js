import React, { Component } from 'react';
import UserListItem from './UserListItem';

class UserList extends Component {
	render() {
      	const {users, showGamesPlayed} = this.props;
		return(
          <div className='user-list'>
			<div className='user-games'>
				<h1>User Games</h1>
				<UserListItem users={users} showGamesPlayed={showGamesPlayed}/>
			</div>
          </div>
        );
    }
}

export default UserList;