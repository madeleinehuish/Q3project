import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';
import CheckoutCart from './CheckoutCart';
// import Success from './Success';

const Payment = React.createClass({
  render() {
    return (
      <section id="customer" className="checkout">
        <div id="checkout-customer" className="seven columns">

          <div className="checkout-page">
            <Checkout
            />
          </div>

          <div className="checkout-forms">
            {/* Users do not have to create an account. That is optional. Users can get through the entire
            shopping process without needing to create a password */}
            <div id="payment-info-header" className="row">

              <div id="payment-method">
                <form>
                  {/* Need to create credit card form which will use Stripe API */}
                </form>
              </div>

              <div id="billing-address">
                <form>
                  {/* Radio buttons: same as shipping address, use a different billing address */}
                </form>
              </div>

              <div id="customer-navigation" className="row">
                <div className="return">
                  <p><Link to='/shipping'>Return to Shipping</Link></p>
                  <button><Link to='/success'>Complete Order</Link></button>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div id="checkout-cart" className="row">
          <div className="five columns">
            <CheckoutCart
            />
          </div>
        </div>
      </section>
    )
  }
});

export default Payment;
