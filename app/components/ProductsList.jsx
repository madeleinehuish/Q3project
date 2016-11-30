import React from 'react';
import Products from './Products';

const ProductsLists = React.createClass({
  handleSort(event) {
    this.props.handleSort(event.target.value);
  },

  render() {
    const products = this.props.products.map((product, index) => {
      return <Products
        product={product}
        key={index}
        handleAddToCart={this.props.handleAddToCart}
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
              <li><a >ALL</a></li>
              <li><a>BEARD</a></li>
              <li><a>MUSTACHE</a></li>
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
