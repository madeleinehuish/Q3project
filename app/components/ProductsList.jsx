import React from 'react';
import Products from './Products';
import ProductsList from './ProductsList';
import SearchBox from './SearchBox';

const ProductsLists = React.createClass({
  handleClick () {
    this.props.displaySearch()
  },
  handleSortType(event) {
    console.log(event.target.name);
    const sortValue = event.target.name;
    this.props.handleSort(sortValue);
  },

  render() {
    const products = this.props.products.map((product, index) => {
      return <Products
        product={product}
        key={index}
        handleAddToCart={this.props.handleAddToCart}
        displaySearch={this.displaySearch}
        searchFilter={this.searchFilter}
        handleSearch={this.props.handleSearch}
        inputValue={this.props.inputValue}
        value={this.props.value}
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
              <li><a name="all" href="#" onClick={this.handleSortType}>ALL</a></li>
              <li><a name="beard" href="#" onClick={this.handleSortType}>BEARD</a></li>
              <li><a name="moustache" href="#" onClick={this.handleSortType}>MUSTACHE</a></li>
            </ul>
          </div>
          <div id="search-img" className="four columns">
            <img onClick={this.handleClick} src="images/search-icon.png"/>
          </div>
            {this.props.searchVisible ? <SearchBox
              handleSearch={this.props.handleSearch}
              value={this.props.value}/> : null}
        </div>

        <div id="products-page" className="row">
          { products }
        </div>
      </div>
    );
  }
});

export default ProductsLists;
