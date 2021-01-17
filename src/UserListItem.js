import React from 'react';
import PropTypes from 'prop-types';

const UserListLitem = ({users, showGamesPlayed}) => {
	return(
		<ol>
      		{users && users.map(({username, gamesPlayed}) =>
      			<li key={username}>{username} played {showGamesPlayed ? gamesPlayed : '*'} games</li>
             )}
      	</ol>
	);
}

UserListLitem.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object).isRequired,
	showGamesPlayed: PropTypes.bool.isRequired,
}

export default UserListLitem;