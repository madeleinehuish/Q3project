import { Link } from 'react-router';
import React from 'react';

const Product = React.createClass({
  // onRender() {
  //   this.props.onRender(this.props.products);
  // },

  render() {

    return (
      <section id="products">
          <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src={this.props.product.image}/>
            </div>
            <div className="name-price">
              <p id="product-name">{this.props.product.name}</p>
              {/* <p id="product-name">{this.props.productsList.name}</p> */}
              <p className="bling">{Number(this.props.product.price).toFixed(2)}</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div>
          {/* <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Balm-1024_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">WOODSMAN BEARD BALM</p>
              <p id="product-price">$24</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div> */}
          {/* <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/TBB_-_Essential_Beard_Kit_Right_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">ESSENTIAL BEARD GROOMING KIT</p>
              <p id="product-price">$50</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div> */}
          {/* <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Oil_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">WOODSMAN BEARD OIL</p>
              <p id="product-price">$20</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div> */}
          {/* <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/Woodsman-Beard-Balm-1024_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">WOODSMAN BEARD BALM</p>
              <p id="product-price">$24</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div> */}
          {/* <div id="products-to-buy" className="four columns">
            <div className="product-image">
              <img src="https://cdn.shopify.com/s/files/1/0222/2214/products/TBB_-_Essential_Beard_Kit_Right_1024x1024.jpg"/>
            </div>
            <div className="name-price">
              <p id="product-name">ESSENTIAL BEARD GROOMING KIT</p>
              <p id="product-price">$50</p>
            </div>
            <Link to='/cart'><button>ADD TO CART</button></Link>
          </div> */}
      </section>
    )
  }
});

export default Product;
