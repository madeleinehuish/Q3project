import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';

const Shipping = React.createClass({
  render() {
    return (
      <section id="shipping">
        <div className="checkout">
          <Checkout
          />
        </div>

        <div className="checkout-forms">
          <div id="shipping-info-header" className="row"></div>
          <div id="shipping-form" className="row"></div>
          <div id="shipping-navigation" className="row"></div>
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
            <div className="return">
              <p><Link to='/customer'>Return to Customer Information</Link></p>
              <button><Link to='/payment'>Continue to Payment Method</Link></button>
            </div>
        </div>
      </section>
    )
  }
});

export default Shipping;
