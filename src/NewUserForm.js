import React, { Component } from 'react';

class NewUserForm extends Component {
  	state = {
		firstName: '',
      	lastName: '',
      	userName: '',
    };

	isAnyFieldEmpty = () => !this.state.firstName || !this.state.lastName || !this.state.userName;

	updateState = (e) => this.setState({[e.target.name]: e.target.value});

	addUser = (userName) => {
    	const {onAddUser} = this.props;
      	onAddUser(userName);
    }

	render() {
      	const {firstName, lastName, userName} = this.state;
		const {errorMsg} = this.props;
    	return(
          	<div className='add-user'>
          	  <div className='add-user-form'>
        		<h1>Add new user</h1>
          		<input 
          			className='first-name'
          			type='text'
          			name='firstName'
          			placeholder='First name'
          			value={firstName}
					onChange={(e) => this.updateState(e)} />
				<input 
          			className='last-name'
          			type='text'
					name='lastName'
					placeholder='Last name'
          			value={lastName}
					onChange={(e) => this.updateState(e)} />
				<input 
          			className={errorMsg ? 'userName-error' : 'username'}
          			type='text'
					name='userName'
					placeholder={'Username'}
          			value={userName} 
					onChange={(e) => this.updateState(e)} />
				<button onClick={() => this.addUser(userName)} disabled={this.isAnyFieldEmpty()}>Add User</button>
			  </div>
			  {errorMsg && <div className='error-duplicate-username'>
				{errorMsg}
			  </div>}
          	</div>
        );
    }
}

export default NewUserForm;