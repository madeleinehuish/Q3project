import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';
import CheckoutCart from './CheckoutCart';
// import Success from './Success';

const Payment = React.createClass({
  setTaxRate(event) {
    this.props.setTaxRate(event.target.value);
  },

  render() {
    return (
      <section id="customer" className="checkout">
        <div id="checkout-customer" className="seven columns">

          <div className="checkout-page">
            <Checkout
            />
          </div>

          <div className="checkout-forms">
            <div id="payment-info-header" className="row">

              <div id="payment-method">
                <h5>Payment method</h5>
                <p>All transactions are secure and encrypted. Credit card information is never stored.</p>
              </div>


              <div id="payment-form" className="row">
                <div id="credit-card">
                  <div className="eight columns">
                    <h5>Credit card</h5>
                  </div>
                  <div className="four columns">
                    <img src="http://i76.imgup.net/accepted_c22e0.png" />
                  </div>
                </div>

                  <form>
                    {/* Need to create credit card form which will use Stripe API */}
                    <div className="credit-card-details">
                      <div className="credit-card-number">
                        <input type="number" name="card-number"   pattern="^\d{3}-\d{2}-\d{4}$" placeholder="Credit card number" autoComplete="cc-number" required/>
                      </div>

                      <div className="six columns credit-card-name">
                        <input type="text" name="card-name" placeholder="Name on card" required/>
                      </div>
                      <div className="three columns credit-card-date">
                        <input type="number" name="expiry" placeholder="MM/YY" required/>
                      </div>
                      <div className="three columns credit-card-cvc">
                        <input type="number" name="cvc" placeholder="CVC" required/>
                      </div>
                    </div>
                  </form>
                </div>


                <div className="row shipping-method">
                  <h5>Shipping method</h5>
                  <form>
                    {/* Need to add 3 radio buttons: standard shipping (free), premium ($9.99), FedEx 2 Day ($25.00).
                      After user selects the shipping cost will update in the aside, and so will the total.
                      This will need to update on this page and the payment page. */}
                    <div className="row choose-address">
                      <div className="one columns">
                        <input type="radio" name="address" value="standard" defaultChecked />
                      </div>
                      <div className="eleven columns">
                        <label>Same as shipping address</label>
                      </div>
                    </div>
                    <div className="row choose-address">
                      <div className="one columns">
                        <input type="radio" name="address" value="premium" />
                      </div>
                      <div className="eleven columns">
                        <label>Use a different billing address</label>
                      </div>
                    </div>
                  </form>
                </div>


              <div id="customer-navigation" className="row">
                <div className="one columns return">
                  <img src="images/return.png" />
                </div>
                <div className="four columns return">
                  <p><Link to='./shipping'>Return to Shipping</Link></p>
                </div>
                <form className="six columns">
                  <Link to='/success'><button onClick={this.props.onSubmitOrder, this.props.clearCart}>Complete Order</button></Link>
                </form>
              </div>

            </div>
          </div>
        </div>

        <div id="checkout-cart" className="row">
          <div className="five columns">
            <CheckoutCart
              cartItems={this.props.cartItems}
              taxRate={this.props.taxRate}
              // selectShipping={this.props.selectShipping}
              shippingCost={this.props.shippingCost}
            />
          </div>
        </div>
      </section>
    )
  }
});

export default Payment;
