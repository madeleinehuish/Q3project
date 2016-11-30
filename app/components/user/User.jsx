import { Link } from 'react-router';
import React from 'react';
import UserInfo from './UserInfo';
import UserOrders from './UserOrders';

const User = React.createClass({
	logOut(){
    this.props.logOut();
  },

	render() {
    return (
			<section id="user-page">
				<div className="row">
					<h3>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3>
					<h5>{this.props.currentUser.email}</h5>
					{this.props.loggedIn ? <Link to="/"><button onClick={this.logOut}>Log out</button></Link>
					: <p id="login-icon">This is shit</p>}
					</div>

				<div className="row">
					<UserInfo
						userInformation={this.props.userInformation}
					/>
					<UserOrders
						// userOrders={this.props.userOrders}
					/>
				</div>
			</section>
		)}
});

export default User;
