import { Link } from 'react-router';
import React from 'react';

const Login = React.createClass({
  onClickSubmit(event) {
    event.preventDefault()
    this.props.onSubmitLogin()
  },

  render() {
    return (
      <section id="login">
        <div id="login-account">
          <div id="login-title" className="twelve columns">
            <h1>RETURNING CUSTOMERS</h1>
          </div>

          <form id="login-form">
            <div id="email-password" className="row">
              <div id="email" className="six columns">
                {/* <input placeholder="Email" id="email" type="text" onChange={this.props.onFormChangeEmail} value={this.props.signupEmail} className="validate"/> */}
                <input placeholder="Email" id="email" name="signupEmail" type="text" onChange={this.props.onFormChangeSample} value={this.props.signupEmail} className="validate"/>
              </div>
              <div id="password" className="six columns">
                <input placeholder="Password" id="password" type="password" onChange={this.props.onFormChangePassword} value={this.props.signupPassword} className="validate"/>
              </div>
            </div>
          </form>

          <div id="login-account-btn" className="twelve columns">
            <Link to='/'><button id="login-btn" type="submit" name="action" onClick={this.onClickSubmit}>
            {/* Need to set this up so user is redirected to page they came form */}
            LOGIN</button></Link>
          </div>
          {/* Do you want to user to be directed to the homepage or products page? */}
          {/* Forgot your password won't do anything unless we magically get all this other
          craziness done and something work out how that process works. */}
          <p>Forgot your password?</p>
        </div>

        <div id="return-to-signup">
          <p>NEW CUSTOMER?</p>
            <Link to='/signup'><button>CREATE AN ACCOUNT</button></Link>
        </div>
      </section>
    )
  }
});

export default Login;
