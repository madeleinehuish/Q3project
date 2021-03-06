import Products from './Products';
import React from 'react';
import SearchBox from './SearchBox';

const ProductsLists = React.createClass({
  handleClick() {
    this.props.displaySearch();
  },

  handleSortType(event) {
    const sortValue = event.target.name;

    this.props.handleSort(sortValue);
  },

  render() {
    const products = this.props.products.map((product, index) => {
      return <Products
        displaySearch={this.displaySearch}
        handleAddToCart={this.props.handleAddToCart}
        handleSearch={this.props.handleSearch}
        inputValue={this.props.inputValue}
        key={index}
        product={product}
        searchFilter={this.searchFilter}
        value={this.props.value}
      />
    });

    return (
      <div id="product-list">
        <div className="row" id="products-header">
          <h1>PRODUCTS</h1>
        </div>
        <div className="row">
          <div className="eight columns">
            <ul id="filter-sort">
              <li id="filter-options">FILTER BY LINE:</li>
              <li><a href="#" name="all" onClick={this.handleSortType}>ALL</a></li>
              <li><a href="#" name="beard" onClick={this.handleSortType}>BEARD</a></li>
              <li><a href="#" name="moustache" onClick={this.handleSortType}>MUSTACHE</a></li>
            </ul>
          </div>
          <div className="four columns" id="search-img">
            <img onClick={this.handleClick} src="images/search-icon.png" />
          </div>
            {this.props.searchVisible ? <SearchBox
              handleSearch={this.props.handleSearch}
              value={this.props.value} /> : null
            }
        </div>
        <div className="row" id="products-page" >
          { products }
        </div>
      </div>
    );
  }
});

export default ProductsLists;
