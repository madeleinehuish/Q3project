import { Link } from 'react-router';
import React from 'react';


const Information = React.createClass({
	render() {
    return (
			<section id="information">
        {/* <div  className="seven columns"> */}
					<p>{this.props.address1}</p>
					<p>{this.props.city}</p>
					<p>{this.props.state}</p>
					<p>{this.props.zip}</p>
					<p id="edit">Edit shipping address</p>
        {/* </div> */}
			</section>
		)}
});

export default Information;
