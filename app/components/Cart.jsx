import { Link } from 'react-router';
import React from 'react';
// import Customer from './checkout/Customer';

const Cart = React.createClass({
  render() {
    return (
      <section id="cart">
        <div id="cart-header">
          <h1>This is the cart</h1>
        </div>

        <div id='products-in-cart'>
          <h4>Product Description</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
          <img />
          {/* State change: if we allow user to increase or descrease the quantity --> will affect quantity and price */}
          <p>qty</p>
          <p>price</p>
          {/* State change: remove item from cart */}
          <button>x</button>
        </div>

        <div id="shop-checkout-btn">
          <button><Link to='/products'>CONTINUE SHOPPING</Link></button>
          <button><Link to='/customer-checkout'>CHECKOUT</Link></button>
        </div>
      </section>
    )
  }
});

export default Cart;
