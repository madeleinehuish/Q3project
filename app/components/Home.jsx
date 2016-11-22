import { Link } from 'react-router';
import React from 'react';

const Home = React.createClass({
  render() {
    return (
      <section id="home">
        <div id="hero">
          <Link to='/products'>Shop</Link>
        </div>

        <div id="panel">
          <Link to='/products'>Products</Link>
          <Link to='/guides'>Guides</Link>
          <Link to='/history'>History</Link>
        </div>

        <div id="refined-quote">
        </div>

        <div id="instagram">
          {/* State will change when user clicks on heart to like image */}
        </div>

        {/* <div id="map">

        </div> */}
      </section>
    )
  }
});

export default Home;
