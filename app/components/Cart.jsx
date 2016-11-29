import { Link } from 'react-router';
import React from 'react';
import CartItems from './CartItems';

const Cart = React.createClass({
  render() {
    const cartItems = this.props.cartItems.map((item, index) => {
      return <CartItems
        cartItem={item}
        key={index}
        cartItems={this.props.cartItems}
        handleRemoveFromCart={this.props.handleRemoveFromCart}
      />
    });

    return (
      <section className="cart">
        <div id="products-header" className="row">
          <h1>CART</h1>
          <h5>You have 1 item in your cart</h5>
        </div>

        <div id="cart-main" className="row">
          <div id="cart-header" className="row">
            <div className="six columns">
              <h5>PRODUCT DESCRIPTION</h5>
            </div>
            <div className="three columns">
              <h5>PRICE</h5>
            </div>
            <div className="three columns">
              <h5>QUANTITY</h5>
            </div>
          </div>
          <div id='products-in-cart' className="row">
            { cartItems }
          </div>
        </div>

        <div id="cart-subtotal" className="row">
          {/* <div className="four columns"> */}
          {/* SUBTOTAL CALCULATIONS READY - NEED TO ADD QUANTITY */}
          {/* <span className="bling">{(this.props.cartItem.reduce((amount, curr, index) => {
              return amount + curr.price * curr.quantity;
            }, 0)).toFixed(2)}</span> */}
            <p id="subtotal">SUBTOTAL <span>$69.95</span></p>
            <p id="shipping-disclaimer">*Doesn't include shipping cost. FREE SHIPPING over $50.</p>
          {/* </div> */}
        </div>

        <div id="shop-checkout-btn">
          <Link to='/productsList'><button id="continue-shopping">CONTINUE SHOPPING</button></Link>
          <Link to='/customer-checkout'><button id="proceed-to-checkout">CHECKOUT</button></Link>
        </div>
      </section>
    )
  }
});

export default Cart;
