import React from 'react';
import Products from './Products';
import SearchBox from './SearchBox';

const ProductsLists = React.createClass({
  handleClick () {
    this.props.displaySearch()
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
              <li>ALL</li>
              <li>BEARD</li>
              <li>MUSTACHE</li>
            </ul>
          </div>
          <div id="search-img" className="four columns">
            {/* STATE CHANGE: need to add a recursive feature that displays a search box. */}
            <img onClick={this.handleClick} src="images/search-icon.png"/>
          </div>
            {
           this.props.searchVisible
             ? <SearchBox />
             : null
           }
        </div>

        <div id="products-page" className="row">
          { products }
        </div>
      </div>
    );
  }
});

export default ProductsLists;
