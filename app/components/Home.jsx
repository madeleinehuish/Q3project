import { Link } from 'react-router';
import React from 'react';

const Home = React.createClass({
  render() {
    return (
      <section id="home">
        <div id="hero">
          <h1>Refined</h1>
          {/* <Link to='/products'>Shop</Link> */}
        </div>

        <div id="blurb" className="twelve columns">
          <div className="six columns">
            <h3>A large variety of high quality products</h3>
          </div>
          <div className="six columns">
            <img src="images/woodsman-beard-balm.png" />
            <img src="images/woodsman-beard-oil.png" />
          </div>
        </div>

        <div className="twelve columns">
          <div id="panel">
            <div className="four columns">
              <Link to='/guides'><img src="images/grooming.png" /></Link>
            </div>
            <div className="four columns">
              <Link to='/products'><img src="images/beard-kit.jpg" /></Link>
            </div>
            <div className="four columns">
              <Link to='/history'><img src="images/history.jpg" /></Link>
            </div>
          </div>
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
