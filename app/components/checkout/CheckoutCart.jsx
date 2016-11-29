import { Link } from 'react-router';
import React from 'react';
import CheckoutCartItems from './CheckoutCartItems';


const CheckoutCart = React.createClass({
  render() {
    const cartItems = this.props.cartItems.map((item, index) => {
      return <CheckoutCartItems
        cartItem={item}
        key={index}
        cartItems={this.props.cartItems}
        // handleRemoveFromCart={this.props.handleRemoveFromCart}
      />
    });

    return (
      <section className="checkout-cart">
      {/* <div id="cart-main" className="row"> */}
        <div id='products-in-checkout-cart'>
          <div className="row">

            <div className="updated-checkout-cart">
            <div className="row">
              { cartItems }
              </div>
            </div>
          </div>

          <div id="running-totals" className="row">
            <div id="payment-headings" className=" six columns">
              <p>Subtotal: </p>
              <p>Tax: </p>
              <p>Shipping: </p>
            </div>
            <div id="payment-costs" className=" six columns">
              <p>$0 </p>
              <p>$0 </p>
              <p>$0 </p>
            </div>
            </div>

            <div id="checkout-totals" className="row">
            <div id="total" className="row">
              <div className="eight columns">
                <p id="total-heading">Total: </p>
              </div>
            <div className="four columns cost">
              <p id="total-currency">USD </p>
              <p id="total-cost">$0 </p>
            </div>
            {/* <div className="two columns cost">
              <p id="total-cost">$0 </p>
            </div> */}
            </div>
          </div>
      {/* </div> */}
        </div>
      </section>
    )
  }
});

export default CheckoutCart;
