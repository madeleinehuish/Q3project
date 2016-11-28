import { Link } from 'react-router';
import React from 'react';

const User = React.createClass({
	render() {
    return (
			<section>
				<div className="row">
					<div className="5 columns">
						<h2>User Info</h2>
					</div>
					<div className="7 columns">
						<h2>User Orders</h2>
					</div>
				</div>
			</section>
		)}
});

export default User;
