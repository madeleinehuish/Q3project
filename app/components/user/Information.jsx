import { Link } from 'react-router';
import React from 'react';


const Information = React.createClass({
	render() {
    return (
			<section id="information">
        {/* <div  className="seven columns"> */}
					<p>{this.props.userInfo.address1} Apt</p>
					<p>City</p>
					<p>Country, State, Zipcode</p>
					<p id="edit"><Link to='./customer-checkout'>Edit shipping address</Link></p>
        {/* </div> */}
			</section>
		)}
});

export default Information;
