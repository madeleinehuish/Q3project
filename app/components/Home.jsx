import { Link } from 'react-router';
import React from 'react';

const Home = React.createClass({
  render() {
    return (
      <section id="home" className="wrapper">
        <div id="hero">
          <h1>Refined</h1>
          {/* <Link to='/products'>Shop</Link> */}
        </div>

        <div id="blurb" className="row">
          <div className="six columns">
            <h3>A large variety of high quality products</h3>
          </div>
          <div className="six columns">
            <img src="images/woodsman-beard-balm.png" />
            <img src="images/woodsman-beard-oil.png" />
          </div>
        </div>

        <div id="img-panel" className="row">

          <div id="guides" className="four columns">
            <img className="img-responsive" src="images/grooming.png" />
            <div id="guides-text" className="overlay">
              <Link to='/guides'><h4>Guides</h4></Link>
            </div>
          </div>

          <div id="products" className="four columns">
            <Link to='/products'><img className="img-responsive" src="images/beard-kit.jpg" /></Link>
            <div id="products-text" className="overlay">
              <Link to='/products'><h4>Products</h4></Link>
            </div>
          </div>

          <div id="history" className="four columns">
            <Link to='/history'><img className="img-responsive" src="images/history.jpg" /></Link>
            <div id="history-text" className="overlay">
              <Link to='/history'><h4>History</h4></Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div id="refined-quote" className="twelve columns">
            {/* <div> */}
            <h4>Quote goes here</h4>
            {/* </div> */}
          </div>
        </div>

        <div className="row">
          <div id="instagram" className="twelve columns">
            {/* <div > */}
              <h4>Instagram images go here</h4>
              {/* State will change when user clicks on heart to like image */}
            {/* </div> */}
          </div>
        </div>

        {/* <div className="twelve columns">
          <div id="map">

          </div>
        </div> */}
      </section>
    )
  }
});

export default Home;
