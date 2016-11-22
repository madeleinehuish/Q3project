import { Link } from 'react-router';
import React from 'react';

const Signup = React.createClass({
  render() {
    return (
      <section id="signup">
        <div id="create-account">
        <h1>Create Account</h1>
          <form>
            {/* First name, last name, email, & password.
             User not required to add any other details unless they purchase something. */}
          </form>
        </div>

        <div id="return-to-login">
          <p>Returning Customer?</p>
          <button><Link to='/login'>LOGIN</Link></button>
        </div>
      </section>
    )
  }
});

export default Signup;
