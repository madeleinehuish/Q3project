import { Link } from 'react-router';
import React from 'react';

const NotFound = React.createClass({
  render() {
    return (
      <main>
        <h2>Ain't nothing here mo-fo</h2>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/guides'>Guides</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
        <div>
          <img src="https://media.giphy.com/media/KrLqtbe8PGEDe/giphy.gif"/>
        </div>
      </main>
    )
  }
});

export default NotFound;
