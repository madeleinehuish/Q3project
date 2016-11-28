import { Link } from 'react-router';
import axios from 'axios';
// import ErrorLogger from './ErrorLogger';
import React from 'react';

const Products = React.createClass({
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
                <p id="product-name">{(this.props.product.name).toUpperCase()}</p>
                {/* <p id="product-name">{this.props.productsList.name}</p> */}
                <p className="bling">{Number(this.props.product.price).toFixed(2)}</p>
              </div>
              <Link to='/cart'><button>ADD TO CART</button></Link>
            </div>
        </section>
      )
    }
  });

export default Products;
