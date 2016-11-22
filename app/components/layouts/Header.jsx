import { Link } from 'react-router';
import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <nav>
        <div id="logo">
          <Link to='/'>Refined</Link>
        </div>

        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/guides'>Guides</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </nav>
    )
  }
});

export default Header;
