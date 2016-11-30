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
				</div>
				<div className="row">
					<UserInfo
						currentUser={this.props.currentUser}
					/>
					<UserOrders
						userOrders={this.props.userOrders}
					/>
				</div>
			</section>
		)}
});

export default User;
