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
						<div id="user-order-history">
			        <div className="two columns product-thumbnail">
			          <div className="product-thumbnail__wrapper">
			            {/* <img src={this.props.userOrder.image}/> */}
			            <img src="images/woodsman-beard-oil.png"/>
			          </div>
			            <span className="product-thumbnail__quantity">1</span>
			        </div>
			        <div className="seven columns text">
			          {/* <p>{this.props.userOrder.name}</p> */}
			          <p>Product name</p>

			          {/* <p>{this.props.orderHistory}</p> */}
			        </div>
			        <div className="three columns text">
			          {/* <p className="bling">{Number(this.props.userOrder.price).toFixed(2)}</p> */}
			          <p className="bling">20</p>
			        </div>
						</div>
					</div>
				{/* </div> */}
			</section>
		)

		// }
	}
});

export default UserOrders;
