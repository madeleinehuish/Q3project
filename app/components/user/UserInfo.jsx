import { Link } from 'react-router';
import React from 'react';
import Information from './Information';

const UserInfo = React.createClass({
	render() {
    // const userInfo = this.props.cartItems.map((item, index) => {
    //   return <Information
    //     userInfo={item}
    //     key={index}
    //   />
    // });

    return (
			<section id="user-information">
        {/* <div id="info-orders" className="row"> */}
          <div id="user-info" className="five columns">
            <h5>Your Information</h5>
            {/* {userInfo} */}

          </div>
        {/* </div> */}
			</section>
		)}
});

export default UserInfo;
