import { Link } from 'react-router';
import React from 'react';

const Products = React.createClass({
  render() {
    return (
      <section id="products">
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
          <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Oil_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">WOODSMAN BEARD OIL</p>
              <p id="product-price">$20</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div>
          <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Balm-1024_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">WOODSMAN BEARD BALM</p>
              <p id="product-price">$24</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div>
          <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/TBB_-_Essential_Beard_Kit_Right_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">ESSENTIAL BEARD GROOMING KIT</p>
              <p id="product-price">$50</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div>
          <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Oil_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">WOODSMAN BEARD OIL</p>
              <p id="product-price">$20</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div>
          <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Balm-1024_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">WOODSMAN BEARD BALM</p>
              <p id="product-price">$24</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div>
          <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/TBB_-_Essential_Beard_Kit_Right_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">ESSENTIAL BEARD GROOMING KIT</p>
              <p id="product-price">$50</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div>
        </div>
      </section>
    )
  }
});

export default Products;
