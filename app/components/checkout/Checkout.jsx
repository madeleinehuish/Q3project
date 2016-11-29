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
              <p><Link to='/cart'>Cart > </Link>
                <Link to='/customer-checkout'>Customer Information > </Link>
                <Link to='/shipping'>Shipping > </Link>
                <Link to='/payment'>Payment</Link></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

export default Checkout;
