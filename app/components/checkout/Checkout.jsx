import { Link } from 'react-router';
import React from 'react';
import Customer from './Customer';
import Shipping from './Shipping';
import Payment from './Payment';

const Checkout = React.createClass({
  render() {
    return (
      <section id="customer">
        <div id="checkout">
          <div className="customer-flow">
            <h4>Cart > Customer Information > Shipping > Payment </h4>
          </div>

          <Customer />
          <Shipping />
          <Payment />

          <aside className="checkout-cart">
            <div className="checkout-cart-items">
              <img />
              <p>Name</p>
              <p>Price</p>
            </div>

            <div className="running-totals">
              <p>Subtotal: </p>
              <p>Tax: </p>
              <p>Shipping: </p>
              <p>Total: </p>
            </div>
          </aside>

        </div>
      </section>
    )
  }
});

export default Checkout;
