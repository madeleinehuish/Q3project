import { Link } from 'react-router';
import React from 'react';
import CartItems from './CartItems';

const Cart = React.createClass({
  render() {
    const cartItems = this.props.cartItems.map((product, index) => {
      return <CartItems
        product={product}
        key={index}
        cartItems={this.props.cartItems}
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
            {/* { cartItems } */}
            <div className="one columns">
              <div className="product-image">
                <img src="http://www.westcoastshaving.com/resize/Shared/Images/Product/Benjamin-Barber-Beard-Oil-Black-Oak/benjamin-barber-beard-oil-black-oak.jpg"/>
              </div>
            </div>
            <div className="six columns">
              <p>Benjamin Barber Beard Oil, Black Oak</p>
            </div>
            <div className="two columns">
              <div id="qty-counter">
                  <input type="number" name="qty" defaultValue="1" min="0"/>
                {/* <span className="qty-text">1</span>
                <span className="up-arrow" data-value="1">
                  <img src=""/>
                </span> */}
              </div>
            </div>
            <div className="three columns">
              <p>$10</p>
            </div>
            {/* <img /> */}
            {/* State change: if we allow user to increase or descrease the quantity --> will affect quantity and price */}
            {/* <p>qty</p> */}
            {/* <p>price</p> */}
            {/* State change: remove item from cart */}
            {/* <button>x</button> */}
          </div>
        </div>

        <div id="cart-subtotal" className="row">
          {/* <div className="four columns"> */}
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
