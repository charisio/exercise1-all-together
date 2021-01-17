import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from './UserListItem';

const UserList = ({users, showGamesPlayed}) => {
  return(
    <div className='user-list'>
    	<h1>User Games</h1>
    	<UserListItem users={users} showGamesPlayed={showGamesPlayed}/>
	</div>
  );
}

UserList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object).isRequired,
	showGamesPlayed: PropTypes.bool.isRequired,
}

export default UserList;