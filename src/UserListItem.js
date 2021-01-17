import React from 'react';

const UserListLitem = ({users, showGamesPlayed}) => {
	return(
		<ol>
      		{users && users.map(({username, gamesPlayed}) =>
      			<li key={username}>{username} played {showGamesPlayed ? gamesPlayed : '*'} games</li>
             )}
      	</ol>
	);
}

export default UserListLitem;