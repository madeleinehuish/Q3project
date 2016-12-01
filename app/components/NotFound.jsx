import { Link } from 'react-router';
import React from 'react';

const NotFound = React.createClass({
  render() {
    return (
      <main id="not-found">
        <h2>fo oh fo There ain't nothing here mo-fo</h2>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/guides'>Guides</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
        <div>
          <img src="http://i.giphy.com/Y6ne0Vik9UmT6.gif"/>
          <img src="http://i.giphy.com/hlrC0QXsmbBSg.gif"/>
          <img src="http://i.giphy.com/n94I6qyMbVzRS.gif"/>
        </div>
      </main>
    )
  }
});

export default NotFound;
