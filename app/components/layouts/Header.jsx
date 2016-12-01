import { Link } from 'react-router';
import React from 'react';

const Header = React.createClass({
  logOut(){
    this.props.logOut();
  },

  onClickSubmit(event) {
    this.props.onSubmit()
  },

  render() {
    return (
    <header>
      <div className="twelve columns">
        <div id="logo" className="six columns">
          <Link to='/'><img src="images/logo_white.png"/></Link>
        </div>
        <nav className="six columns">
          <ul>
             {this.props.loggedIn ? <li key={this.props.currentUser.id}><Link to={'/user'}>{this.props.currentUser.firstName}</Link></li>
              : <li id="login-icon"><a href='#openModal'><img src="images/login.png"/></a></li>}
            <li id="products"><Link to='/productslist'>Products</Link></li>
            <li><Link to='/guides'>Guides</Link></li>
            <li><Link to='/cart'><img src="images/cart.png"/></Link></li>
          </ul>
        </nav>
      </div>


      <div id="openModal" className="modalDialog">
        <div>

          <a href="#close" title="Close" className="close">X</a>
          <div id="login-account">
            <div id="login-title" className="twelve columns">
              <h1>RETURNING CUSTOMERS</h1>
            </div>

            <form id="login-form">
              <div id="email-password" className="row">
                <div id="email" className="six columns">
                  <input placeholder="Email" id="email" name="signupEmail" type="text" onChange={this.props.onFormChange} value={this.props.signupEmail} className="validate"/>
                </div>
                <div id="password" className="six columns">
                  <input placeholder="Password" id="password" name="signupPassword" type="password" onChange={this.props.onFormChange} value={this.props.signupPassword} className="validate"/>
                </div>
              </div>
            </form>

            <div id="login-account-btn" className="twelve columns">
              {/* <a href="#close" title="Close" className="close"><button id="login-btn" type="submit" name="action" onClick={this.onClickSubmitLogin}> */}
              {/* Need to set this up so user is redirected to page they came form */}
              {/* LOGIN</button></a> */}
              <a href='#close' title="Close" className="close"><button id="login-btn" type="submit" name="action" onClick={() => this.props.logIn(this.props.currentUser)}>
              {/* Need to set this up so user is redirected to page they came form */}
              LOGIN</button></a>
            </div>
              {/* Do you want to user to be directed to the homepage or products page? */}
              {/* Forgot your password won't do anything unless we magically get all this other
              craziness done and something work out how that process works. */}
              <p>Forgot your password?</p>
            </div>

            <div id="return-to-signup">
              <p>NEW CUSTOMER?</p>
              <a href="#openModal-signup"><button>CREATE AN ACCOUNT</button></a>
            </div>

          </div>
        </div>

        <div id="openModal-signup" className="modalDialog">
          <div>

            <a href="#close" title="Close" className="close">X</a>
            <div id="create-account">
              <div id="create-title" className="twelve columns">
                <h1>CREATE ACCOUNT</h1>
              </div>

              <form id="sign-up-form" onSubmit={this.onClickSubmit}>
                <div id="user-name" className="row">
                  <div id="first-name" className="six columns">
                    <input placeholder="First Name" id="firstName" name="signupFirstName" type="text" onChange={this.props.onFormChange} value={this.props.signupFirstName} className="validate"/>
                  </div>
                  <div id="last-name" className="six columns">
                    <input placeholder="Last Name" id="lastName" name="signupLastName" type="text" onChange={this.props.onFormChange} value={this.props.signupLastName} className="validate"/>
                  </div>
                </div>
                <div id="email-password" className="row">
                  <div id="email" className="six columns">
                    <input placeholder="Email" id="email" name="signupEmail" type="text" onChange={this.props.onFormChange} value={this.props.signupEmail} className="validate"/>
                  </div>
                  <div id="password" className="six columns">
                    <input placeholder="Password" id="password" name="signupPassword" type="password" onChange={this.props.onFormChange} value={this.props.signupPassword} className="validate"/>
                  </div>
                </div>
              </form>

              <div id="create-account-btn" className="twelve columns">
                <a href='#close' title="Close" className="close"><button id="create" type="submit" name="action" onClick={this.onClickSubmit}>

                {/* Need to set this up so user is redirected to page they came form */}
                CREATE ACCOUNT</button></a>
              </div>

            </div>

            <div id="return-to-login" >
              <div className="row">
                <p>RETURNING CUSTOMER?</p>
              </div>
              <div className="row">
                <a href="#openModal"><button id="return-to-login-btn">LOGIN</button></a>
              </div>
              {/* <button id="return-to-login-btn"><Link to='/login'>LOGIN</Link></button> */}
            </div>

          </div>
        </div>

    </header>
    )
  }
});

export default Header;
