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
				<div id="user-header" className="row">
					<h3>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3>
					<h5>{this.props.currentUser.email}</h5>
					{this.props.loggedIn ? <Link to="/"><button onClick={this.logOut}>Log out</button></Link>
					: <p></p>}
					</div>

				<div id="user-details" className="row">
					<div id="user-info">
						<UserInfo
              address1={this.props.address1}
							city={this.props.city}
							state={this.props.state}
							zip={this.props.zip}
							userInformation={this.props.userInformation}
						/>
					</div>
					<div id="user-info">
						<UserOrders
							previousOrders={this.props.previousOrders}
							// userOrders={this.props.userOrders}
						/>
					</div>
				</div>
			</section>
		)}
});

export default User;
