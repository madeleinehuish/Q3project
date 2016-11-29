import { Link } from 'react-router';
import React from 'react';

const User = React.createClass({

	logOut(){
    this.props.logOut();
  },

	render() {
    return (
			<section>
				<div className="row">
					<div className="five columns">
						<h2>User Info</h2>
						<h5>Name : {this.props.currentUser.firstName} {this.props.currentUser.lastName}</h5>

						<h5>Email: {this.props.currentUser.email}</h5>
					</div>
					<div className="seven columns">
						<h2>User Orders</h2>

					</div>
				</div>
				<button onClick={this.logOut}>Log out</button>
			</section>
		)}
});

export default User;
