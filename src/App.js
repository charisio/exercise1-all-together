import React, { Component } from 'react';
import logo from './logo.svg';
import NewUserForm from './NewUserForm';
import UserList from './UserList';
import ToggleGamesButton from './ToggleGamesButton';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
	state = {
		users: [],
      	showGamesPlayed: true,
      	errorMsg: '',
	};

	addUserHandler = (username) => {
		const userInArray = this.state.users.filter(user => user.username === username);      
      	if (userInArray.length) {
        	this.setState({errorMsg: 'Username already exists! Please choose a different one.'});
        } else {
    		this.setState((prevState) => ({
              users: [...prevState.users, {username, gamesPlayed: 0}],
              errorMsg: '',
            }));
        }
    };

	toggleGamesPlayedHandler = (e) => {
    	this.setState((prevState) => ({
        	showGamesPlayed: !prevState.showGamesPlayed,
        }));
    }

	render() {
      	const {users, errorMsg, showGamesPlayed} = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<NewUserForm onAddUser={this.addUserHandler} errorMsg={errorMsg}/>
				<UserList users={users} showGamesPlayed={showGamesPlayed}/>
				{users.length ? 
                 <ToggleGamesButton showGamesPlayed={showGamesPlayed} toggleGamesPlayed={this.toggleGamesPlayedHandler}/> : '' }
			</div>
		);
	}
}

export default App;
