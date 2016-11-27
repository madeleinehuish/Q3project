import { Link } from 'react-router';
import React from 'react';

const Login = React.createClass({
  render() {
    return (
      <section id="login">
        <div id="signin-to-account">
        <h1>Returning Customers</h1>
          <form>
            {/* Email & password. */}
          </form>
          {/* Do you want to user to be directed to the homepage or products page? */}
          <button><Link to='/'>LOGIN</Link></button>
          {/* Forgot your password won't do anything unless we magically get all this other
          craziness done and something work out how that process works. */}
          <p>Forgot your password?</p>
          {/* State change: if user logs in from the customer info page, when they click
          login, they need to be directed to a: the customer info page if this is their first
          purchase and have not yet entered an address, or b: to the shipping page if they have
          made a purchase before, where their address should render to the screen.
          <button><Link to='/'>LOGIN</Link></button> */}
        </div>

        <div id="return-to-signup">
          <p>New Customer?</p>
          <button><Link to='/signup'>CREATE AN ACCOUNT</Link></button>
        </div>
      </section>
    )
  }
});

export default Login;
