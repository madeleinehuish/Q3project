import { Link } from 'react-router';
import axios from 'axios';
import React from 'react';

const Products = React.createClass({
  handleClick() {
    this.props.handleAddToCart(this.props.product);
  },

  render() {
    return (
      <section id="products">
        <div id="products-to-buy" className="four columns">
          <div className="product-image">
            <a href="#openModal-product"><img src={this.props.product.image}/></a>
          </div>
          <div className="name-price">
            <p id="product-name">{(this.props.product.name).toUpperCase()}</p>
            <p className="bling">{Number(this.props.product.price).toFixed(2)}</p>
          </div>
          <Link to='/cart'><button onClick={this.handleClick}>ADD TO CART</button></Link>
        </div>

        <div id="openModal-product" className="modalDialog-product">
          <div>
            <a href="#close" title="Close" className="close">X</a>

            <div id="product-modal">
              <div id="product-title" className="twelve columns">
                <h1>{this.props.product.name}</h1>
              </div>

              <div id="product-content" className="row">
                <div id="product-image" className="five columns">
                  <img id="modal-product-image" src={this.props.product.image} />
                </div>
                <div id="product-details" className="seven columns">
                  {/* {<img src="images/rating.jpeg"/>.repeat(3)} */}
                  <div id="rating-row" className="row">
                    <p id="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></p>
                    <p id="number-of-reviews">117 reviews</p>
                  </div>
                  <div className="row">
                    <p id="price">{this.props.product.price}</p>
                    <p id="description">{this.props.product.description}</p>
                  <div className="row">
                      <a href='#close' title="Close" className="close"><button onClick={this.handleClick}
                        id="modal-product-btn">ADD TO CART</button></a>
                  </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    )
  }
  });

export default Products;
