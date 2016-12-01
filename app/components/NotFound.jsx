import { Link } from 'react-router';
import React from 'react';

const NotFound = React.createClass({
  render() {
    return (
      <main id="not-found">
        <div id="nf-header">
          <h3>NO BEARDS OR STACHES HERE</h3>
        </div>

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
