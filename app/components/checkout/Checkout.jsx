import { Link } from 'react-router';
import React from 'react';
import Customer from './Customer';
import Shipping from './Shipping';
import Payment from './Payment';

const Checkout = React.createClass({
  render() {
    return (
      <section id="checkout">
        <div className="row">
          <div className="six columns">
            <div className="customer-flow">
              <h2>Refined</h2>
              <p>Cart > Customer Information > Shipping > Payment </p>
            </div>
            <div className="checkout-process">
              <h6>Customer, shipping, and Payment to go here</h6>
              {/* <Customer />
              <Shipping />
              <Payment /> */}
            </div>
          </div>
          <div id="cart-items" className="six columns">
            <div className="checkout-cart-items">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Oil_1024x1024.jpg"/>
              <p>Name</p>
              <p>Price</p>
            </div>

            <div className="running-totals">
              <p>Subtotal: </p>
              <p>Tax: </p>
              <p>Shipping: </p>
              <p>Total: </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

export default Checkout;
