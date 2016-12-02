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
                <h1>THE MOGUARD- MUSTACHE GUARD</h1>
              </div>

              <div id="product-content" className="row">
                <div id="product-image" className="five columns">
                  <img id="modal-product-image" src="https://images-na.ssl-images-amazon.com/images/I/51EH1uNBdRL._SX522_.jpg" />
                </div>
                <div id="product-details" className="seven columns">
                  {/* {<img src="images/rating.jpeg"/>.repeat(3)} */}
                  <div id="rating-row" className="row">
                    <p id="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></p>
                    <p id="number-of-reviews">117 reviews</p>
                  </div>
                  <div className="row">
                    <p id="price">$13.60</p>
                    <p id="description">Do you enjoy beer, but you end up wearing most of it on your mustache and beard? Don't ruin your mustache wax, reach for a MoGuard. Attaches to all sized drinking glasses. The MoGuard's design and the fact that it is made of a very flexible silicone material enables it to fit onto all drinking cups.</p>
                  <div className="row">
                    <button id="modal-product-btn">ADD TO CART</button>    
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
