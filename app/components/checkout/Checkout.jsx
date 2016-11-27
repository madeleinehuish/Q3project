import { Link } from 'react-router';
import React from 'react';

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
              <Link to="/customer">Customer</Link>
            </div>
          </div>

          <div id="cart-items" className="six columns">

            <div id="checkout-cart-items" className="row">
              <div className="two columns product-thumbnail">
                <div className="product-thumbnail__wrapper">
                  <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Oil_1024x1024.jpg"/>
                </div>
                <span className="product-thumbnail__quantity">1</span>
              </div>
              <div className="seven columns text">
                <p>Woodsmans Oil</p>
              </div>
              <div className="three columns text">
                <p>$12.00</p>
              </div>
              <div>
              </div>
            </div>
            <div id="checkout-cart-items" className="row">
              <div className="two columns product-thumbnail">
                <div className="product-thumbnail__wrapper">
                  <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Oil_1024x1024.jpg"/>
                </div>
                <span className="product-thumbnail__quantity">1</span>
              </div>
              <div className="seven columns text">
                <p>Woodsmans Oil</p>
              </div>
              <div className="three columns text">
                <p>$12.00</p>
              </div>
              <div>
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
        </div>
      </section>
    )
  }
});

export default Checkout;
