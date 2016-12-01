import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';
import CheckoutCart from './CheckoutCart';

const Customer = React.createClass({
  logOut() {
    this.props.logOut();
  },

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
            {/* Users do not have to create an account. That is optional. Users can get through the entire
            shopping process without needing to create a password */}
            <div id="customer-info-header" className="row">
            {/* {this.props.loggedIn ? <li key={this.props.currentUser.id}><Link to={'/user'}>{this.props.currentUser.firstName}</Link></li>
             : <li><Link to='/login'>Login</Link></li>} */}
             {this.props.loggedIn ? <div></div> :
              <div id="customer-email">
                <h5>Customer information</h5>
                <form>
                  <input type="email" name="email" placeholder="Email" required/>
                </form>
                {/* STATE: if the user comes here and then logs in, they need to be directed to the shipping page.
                This will be different to the user logging in from the navbar. That will redirect them to the homepage/products.
                If the user logs in from the navbar, they also won't see this page. When they click on CHECKOUT from cart, it
                should direct them straight to shipping. */}
                <p>Already have an account?<Link to='/login'> Login</Link></p>
              </div>}

              <div id="customer-form" className="row">
                <div id="shipping-details">
                  <h5>Shipping address</h5>
                  <form>
                    <div className="six columns shipping-first-name">
                      {/* <input type="text" name="firstName" placeholder="First name" onChange={this.props.onFormChange} value={this.props.checkout.firstName} required/> */}
                      <input placeholder="First Name" id="firstName" name="firstName" type="text" onChange={this.props.onFormChange} value={this.props.firstName} className="validate" required/>
                    </div>
                    <div className="six columns shipping-last-name">
                      <input type="text" name="lastName" placeholder="Last name" onChange={this.props.onFormChange} value={this.props.lastName} className="validate" required/>
                    </div>

                    <div className="company">
                      <input type="text" name="company" placeholder="Company (optional)"/>
                    </div>

                    <div className="eight columns shipping-address">
                      <input type="text" name="address1" placeholder="Address" onChange={this.props.onFormChange} value={this.props.address1} className="validate" required/>
                    </div>
                    <div className="four columns shipping-apartment">
                      <input type="text" name="address2" placeholder="Apt, suite, etc. (optional)" onChange={this.props.onFormChange} value={this.props.address2} className="validate" />
                    </div>

                    <div className="city">
                      <input type="text" name="city" placeholder="City" onChange={this.props.onFormChange} value={this.props.city} className="validate" required/>
                    </div>

                    <div className="five columns shipping-country">
                      <input id="country" type="text" name="country" placeholder="United States" readOnly/>
                      {/* <select name="country" form="countryform" required>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Canada">Mexico</option>
                      </select> */}
                    </div>
                    <div className="five columns shipping-state">
                      <select name="state" form="stateform" onChange={this.props.onFormChange} value={this.props.state} className="validate" required>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div className="two columns shipping-zipcode">
                      <input type="text" name="zip" placeholder="Zip code" onBlur={this.props.setTaxRate} className="validate" required/>
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
              cartItems={this.props.cartItems}
              taxRate={this.props.taxRate}
            />
          </div>
        </div>
      </section>
    )
  }
});

export default Customer;
