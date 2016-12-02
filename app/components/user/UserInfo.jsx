import { Link } from 'react-router';
import React from 'react';
import Information from './Information';

const UserInfo = React.createClass({
	render() {


        return (
    			<section id="user-information">
            <div id="user-info" className="five columns">
              <h5>Your Information</h5>
    				<div>
              <Information
                address1={this.props.address1}
                city={this.props.city}
                state={this.props.state}
                zip={this.props.zip}
              />
							</div>
            </div>
    			</section>
    		)}
});

export default UserInfo;
