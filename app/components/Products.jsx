import { Link } from 'react-router';
import React from 'react';

const Products = React.createClass({
  render() {
    return (
      <section id="products">
        <div id="products-header">
          <h1>Time to get your shop on.</h1>

        </div>

        <div id="prodcuts-filter">
          {/* Users have the option to click on ALL, BEARD, OR MUSTACHE --> sorting option that will change state */}
          {/* Users will also have the option to click on a search image --> searching option that will change state */}
        </div>

        <div id="products">
          <img />
          <p>Name</p>
          <p>Price</p>
          <button><Link to='/cart'>Add to cart</Link></button>
        </div>

      </section>
    )
  }
});

export default Products;
