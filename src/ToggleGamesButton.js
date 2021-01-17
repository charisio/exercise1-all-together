import React from 'react';

const ToggleGamesButton = ({showGamesPlayed, toggleGamesPlayed}) => {
  	const btnText = showGamesPlayed ? 'Hide' : 'Show';
	return(
		<button onClick={(e) => toggleGamesPlayed(e)}>{btnText} Number of Games played</button>
	);
}

export default ToggleGamesButton;