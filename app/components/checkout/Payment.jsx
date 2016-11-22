import { Link } from 'react-router';
import React from 'react';
import Success from './Success';

const Payment = React.createClass({
  render() {
    return (
      <section id="payment">
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

        <div className="return">
          <p><Link to='/shipping'>Return to Shipping</Link></p>
          <button><Link to='/success'>Complete Order</Link></button>
        </div>
      </section>
    )
  }
});

export default Payment;
