import { Link } from 'react-router';
import React from 'react';


const Information = React.createClass({
	render() {
    return (
			<section id="information">
        {/* <div  className="seven columns"> */}
					<p>{this.props.userInfo.address1}</p>
        {/* </div> */}
			</section>
		)}
});

export default Information;
