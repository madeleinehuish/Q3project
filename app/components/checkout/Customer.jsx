import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';
import CheckoutCart from './CheckoutCart';

const Customer = React.createClass({
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
            <div id="customer-info-header" className="row">

              <div id="customer-email">
                <form>
                  <label>Customer information</label>
                  <input type="email" name="email" placeholder="Email" required/>
                </form>
                {/* STATE: if the user comes here and then logs in, they need to be directed to the shipping page.
                This will be different to the user logging in from the navbar. That will redirect them to the homepage/products.
                If the user logs in from the navbar, they also won't see this page. When they click on CHECKOUT from cart, it
                should direct them straight to shipping. */}
                <p>Already have an account?<Link to='/login'> Login</Link></p>
              </div>

              <div id="customer-form" className="row">
                <div id="shipping-details">
                  <h5>Shipping address</h5>
                  <form>
                    <div className="six columns shipping-first-name">
                      <input type="text" name="first-name" placeholder="First name" required/>
                    </div>
                    <div className="six columns shipping-last-name">
                      <input type="text" name="last-name" placeholder="Last name" required/>
                    </div>

                    <div className="company">
                      <input type="text" name="company" placeholder="Company (optional)"/>
                    </div>

                    <div className="eight columns shipping-address">
                      <input type="text" name="address" placeholder="Address" required/>
                    </div>
                    <div className="four columns shipping-apartment">
                      <input type="text" name="apartment" placeholder="Apt, suite, etc. (optional)"/>
                    </div>

                    <div className="company">
                      <input type="text" name="city" placeholder="City" required/>
                    </div>

                    <div className="five columns shipping-country">
                      <select name="countryList" form="countryform" required>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                      </select>
                      {/* <input type="text" name="country" placeholder="Country" required/> */}
                    </div>
                    <div className="five columns shipping-state">
                      <input type="text" name="state" placeholder="State" required/>
                    </div>
                    <div className="two columns shipping-zipcode">
                      <input type="number" name="zipcode" placeholder="Zip code" required/>
                    </div>
                    {/* <select onChange={this.props.handleSort} value={this.props.sortType}>
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="rating">Rating</option>
                    </select> */}

                    <div className="phone">
                      <input type="tel" name="phone" placeholder="Phone number (optional)"/>
                    </div>

                    <div className="save-information">
                      <div id="save-checkbox" className="six columns">
                        <input type="checkbox" name="save" value="save-info" />
                      </div>
                      <div id="info-save" className="six columns">
                        <p>Save this information for next time</p>
                      </div>
                    </div>
                    {/* IF the user does decide to save the information for next time, where will this be saved if they don't have
                    an account? Guessing it has something to do with cookies??? Need to talk to Ken about this. */}
                  </form>
                </div>
              </div>

              <div id="customer-navigation" className="row">
                <div className="one columns return">
                  <img src="images/return.png" />
                </div>
                <div className="four columns return">
                  <p><Link to='./cart'>Return to Cart</Link></p>
                </div>
                <div className="six columns">
                  <Link to='/shipping'><button>Continue to Shipping Method</button></Link>
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

export default Customer;
