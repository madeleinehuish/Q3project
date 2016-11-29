import { Link } from 'react-router';
import React from 'react';

const CheckoutCartItems = React.createClass({
  render() {
    return (
      <section id="checkout-cart-items">
        {/* <div className="six columns"> */}
        {/* <div id="checkout-cart-items" className="row"> */}
        <div className="two columns product-thumbnail">
          <div className="product-thumbnail__wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Oil_1024x1024.jpg"/>
          </div>
            <span className="product-thumbnail__quantity">1</span>
        </div>
        <div className="seven columns text">
          <p>{this.props.cartItem.name}</p>
        </div>
        <div className="three columns text">
          <p>$12.00</p>
        </div>
      {/* </div> */}
      </section>
    )
  }
});

export default CheckoutCartItems;
