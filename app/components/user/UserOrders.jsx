import { Link } from 'react-router';
import React from 'react';
import OrderHistory from './OrderHistory';

const UserOrders = React.createClass({
	render() {
		// const orderHistory = this.props.cartItems.map((item, index) => {
		//   return <Information
		//     orderHistory={item}
		//     key={index}
		//   />
		// });
    return (
			<section id="user-previous-orders">
				{/* <div id="info-orders" className="row"> */}
					<div id="user-orders" className="seven columns">
						<h5>Order History</h5>
						{/* {userInfo} */}

					</div>
				{/* </div> */}
			</section>
		)}
});

export default UserOrders;
