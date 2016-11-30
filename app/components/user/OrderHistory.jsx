import { Link } from 'react-router';
import React from 'react';

const OrderHistory = React.createClass({
	render() {
    return (
			<section id="user-order-history">
        <div className="two columns product-thumbnail">
          <div className="product-thumbnail__wrapper">
            {/* <img src={this.props.userOrder.image}/> */}
          </div>
            <span className="product-thumbnail__quantity">1</span>
        </div>
        <div className="seven columns text">
          {/* <p>{this.props.userOrder.name}</p> */}
        </div>
        <div className="three columns text">
          {/* <p className="bling">{Number(this.props.userOrder.price).toFixed(2)}</p> */}
        </div>
			</section>
		)}
});

export default OrderHistory;
