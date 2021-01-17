import React from 'react';
import PropTypes from 'prop-types';

const ToggleGamesButton = ({showGamesPlayed, toggleGamesPlayed}) => {
  	const btnText = showGamesPlayed ? 'Hide' : 'Show';
	return(
		<button onClick={(e) => toggleGamesPlayed(e)}>{btnText} Number of Games played</button>
	);
}

ToggleGamesButton.propTypes = {
	showGamesPlayed: PropTypes.bool.isRequired,
	toggleGamesPlayed: PropTypes.func.isRequired,
}

export default ToggleGamesButton;