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
		// const prevOrders = this.props.previousOrders;
		// for (let i = 0; i < prevOrders.length; i++) {
		// const orderHistory = prevOrders.map((item, index) => {
		//   return <OrderHistory
		//     orderHistory={item}
		//     key={index}
		//   />
		// });

    return (
			<section id="user-previous-orders">
				{/* <div id="info-orders" className="row"> */}
					<div id="user-orders" className="seven columns">
						<h5>Order History</h5>
						{/* {orderHistory} */}
					</div>
				{/* </div> */}
			</section>
		)

		// }
	}
});

export default UserOrders;
