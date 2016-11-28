import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';
import CheckoutCart from './CheckoutCart';

const Shipping = React.createClass({
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
            <div id="shipping-info-header" className="row">

              {/* The shipping address needs to save from the previous page. If the user has shopped before and saved their
                address on a previous visit, their address should render.*/}
              <div id="shipping-address-confirmation">
                <p>Saved address to render here.</p>
              </div>
              <div id="shipping-method">
                <form>
                  {/* Need to add 3 radio buttons: standard shipping (free), premium ($9.99), FedEx 2 Day ($25.00).
                    After user selects the shipping cost will update in the aside, and so will the total.
                    This will need to update on this page and the payment page. */}
                </form>
              </div>

              <div id="customer-navigation" className="row">
                <div className="return">
                  <p><Link to='/customer'>Return to Customer Information</Link></p>
                  <button><Link to='/payment'>Continue to Payment Method</Link></button>
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

export default Shipping;
