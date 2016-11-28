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
          <img src="http://i.giphy.com/hlrC0QXsmbBSg.gif"/>
          {/* <img src="http://www.rd.com/wp-content/uploads/2013/10/upturned.jpg"/> */}

          <img src="http://i.giphy.com/Y6ne0Vik9UmT6.gif"/>
          <img src="http://i.giphy.com/n94I6qyMbVzRS.gif"/>
        </div>
      </main>
    )
  }
});

export default NotFound;
