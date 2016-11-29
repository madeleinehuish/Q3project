import { Link } from 'react-router';
import React from 'react';

const Signup = React.createClass({
  onClickSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  },

  render() {
    return (
      <section id="signup">
        <div id="create-account">
          <div id="create-title" className="twelve columns">
            <h1>CREATE ACCOUNT</h1>
          </div>

          <form id="sign-up-form" onSubmit={this.onClickSubmit}>
            <div id="user-name" className="row">
              <div id="first-name" className="six columns">
                <input placeholder="First Name" id="firstName" type="text" onChange={this.props.onFormChangeFirstName} value={this.props.signupFirstName} className="validate"/>
              </div>
              <div id="last-name" className="six columns">
                <input placeholder="Last Name" id="lastName" type="text" onChange={this.props.onFormChangeLastName} value={this.props.signupLastName} className="validate"/>
              </div>
            </div>
            <div id="email-password" className="row">
              <div id="email" className="six columns">
                <input placeholder="Email" id="email" type="text" onChange={this.props.onFormChangeEmail} value={this.props.signupEmail} className="validate"/>
              </div>
              <div id="password" className="six columns">
                <input placeholder="Password" id="password" type="password" onChange={this.props.onFormChangePassword} value={this.props.signupPassword} className="validate"/>
              </div>
            </div>
          </form>

          <div id="create-account-btn" className="twelve columns">
            <Link to='/'><button id="create" type="submit" name="action" onClick={this.onClickSubmit}>
            {/* Need to set this up so user is redirected to page they came form */}
            CREATE ACCOUNT</button></Link>
          </div>

        </div>

        <div id="return-to-login" >
          <div className="row">
            <p>RETURNING CUSTOMER?</p>
          </div>
          <div className="row">
            <Link to='/login'><button id="return-to-login-btn">LOGIN</button></Link>
          </div>
          {/* <button id="return-to-login-btn"><Link to='/login'>LOGIN</Link></button> */}
        </div>
      </section>
    )
  }
});

export default Signup;
