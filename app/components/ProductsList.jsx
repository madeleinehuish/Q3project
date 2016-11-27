import React from 'react';
import Product from './Product';

const ProductsLists = React.createClass({
  render() {
    // const filteredProducts = this.props.searchFilter();

    const products = this.props.products.map((product, index) => {
      return <Product
        product={product}
        key={index}
      />
    });

    return (
      <div id="product-list">
        <div id="products-header" className="row">
          <h1>PRODUCTS</h1>
        </div>

        <div className="row">
          <div className="eight columns">
            <ul id="filter-sort">
              <li id="filter-options">FILTER BY LINE:</li>
              {/* STATE CHANGE: when user clicks on an option, images rerender, and font becomes bold */}
              <li>ALL</li>
              <li>BEARD</li>
              <li>MUSTACHE</li>
            </ul>
          </div>
          <div id="search-img" className="four columns">
            {/* STATE CHANGE: need to add a recursive feature that displays a search box. */}
            <img src="images/search-icon.png"/>
          </div>
        </div>

        <div id="products-page" className="row">
          { products }
        </div>
      </div>
    );
  }
});

export default ProductsLists;
