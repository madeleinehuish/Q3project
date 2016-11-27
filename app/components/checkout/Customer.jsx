import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';

const Customer = React.createClass({
  render() {
    return (
      <section id="customer">
        <div className="checkout">
          <Checkout
          />
        </div>

        <div className="checkout-forms">
            {/* Users do not have to create an account. That is optional. Users can get through the entire
            shopping process without needing to create a password */}
            <div id="customer-info-header" className="row"></div>
            <div id="customer-form" className="row"></div>
            <div id="customer-navigation" className="row"></div>

            <div id="customer-email">
              <form>
                <label>Email</label>
                <input type="email" name="email" />
              </form>
              {/* STATE: if the user comes here and then logs in, they need to be directed to the shipping page.
              This will be different to the user logging in from the navbar. That will redirect them to the homepage/products.
              If the user logs in from the navbar, they also won't see this page. When they click on CHECKOUT from cart, it
              should direct them straight to shipping. */}
              <p>Already have an account?<Link to='/login'>Login</Link></p>
              <button><Link to='/shipping'>Continue to Shipping Method</Link></button>
            </div>

            <div id="shipping-details">
              <form>
              <label>First Name</label>
              <input type="text" name="first-name" />
              <label>Last Name</label>
              <input type="text" name="last-name" />
              <label>Company (optional)</label>
              <input type="text" name="company" />
              {/* Need to add to form: address, phone (optional) */}
              {/* IF the user does decide to save the information for next time, where will this be saved if they don't have
              an account? Guessing it has something to do with cookies??? Need to talk to Ken about this. */}
              </form>
            </div>

            <div className="return">
              <p><Link to='./cart'>Return to Cart</Link></p>
            </div>
        </div>


      </section>
    )
  }
});

export default Customer;
