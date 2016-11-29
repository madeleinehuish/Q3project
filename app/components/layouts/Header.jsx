import { Link } from 'react-router';
import React from 'react';

const Header = React.createClass({
  logOut(){
    this.props.logOut();
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
            {/* <li><Link to='/login'>Login</Link></li> */}
            {/* {this.props.loggedIn ? <li key={this.props.currentUser.id}><Link to={`/api-users/${this.props.currentUser.id}`}>{this.props.currentUser.firstName}</Link></li>
             : <li><Link to='/login'>Login</Link></li>} */}
             {/* to={`/api-users/${this.props.currentUser.id}`} */}
             {this.props.loggedIn ? <li key={this.props.currentUser.id}><Link to={'/user'}>{this.props.currentUser.firstName}</Link></li>
              : <li id="login-icon"><Link to='/login'><img src="images/login.png"/></Link></li>}
            <li id="products"><Link to='/productslist'>Products</Link></li>
            <li><Link to='/guides'>Guides</Link></li>
            <li><Link to='/cart'><img src="images/cart.png"/></Link></li>
          </ul>
        </nav>
      </div>
    </header>
    )
  }
});

export default Header;
