import { Link } from 'react-router';
import axios from 'axios';
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
        <h1 className="column eight offset-by-two">Create Account</h1>
        <form id="signUpForm" className="column eight offset-by-two" onSubmit={this.onClickSubmit}>
                  <p className="card-title">Sign up</p>

                  <div className="row">
                      <div className="form-group twelve columns">
                          <input placeholder="First Name" id="firstName" type="text" onChange={this.props.onFormChangeFirstName} value={this.props.signupFirstName} className="validate"/>

                      </div>
                  </div>

                  <div className="row">
                      <div className="form-group twelve columns">
                          <input placeholder="Last Name" id="lastName" type="text" onChange={this.props.onFormChangeLastName} value={this.props.signupLastName} className="validate"/>

                      </div>
                  </div>

                  <div className="row">
                      <div className="form-group twelve columns">
                          <input placeholder="Email" id="email" type="text" onChange={this.props.onFormChangeEmail} value={this.props.signupEmail} className="validate"/>

                      </div>
                  </div>

                  <div className="row">
                      <div className="form-group twelve columns">
                          <input placeholder="Password" id="password" type="password" onChange={this.props.onFormChangePassword} value={this.props.signupPassword} className="validate"/>

                      </div>
                  </div>


                  <div>
                      <button className="button-primary button" type="submit" name="action" onClick={this.onClickSubmit}>
                          Sign Up
                      </button>
                  </div>

              </form>
        </div>

        <div id="return-to-login" className="column eight offset-by-two">
          <p>Returning Customer?</p>
          {/* <button><Link to='/login'>LOGIN</Link></button> */}
        </div>
      </section>
    )
  }
});

export default Signup;
