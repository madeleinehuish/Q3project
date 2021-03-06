import { Link } from 'react-router';
import React from 'react';

const Products = React.createClass({
  handleClick() {
    this.props.handleAddToCart(this.props.product);
  },

  render() {
    return (
      <section id="products">
        <div className="four columns" id="products-to-buy">
          <div className="product-image">
            <a href="#openModal-product"><img src={this.props.product.image} /></a>
          </div>
          <div className="name-price">
            <p id="product-name">{(this.props.product.name).toUpperCase()}</p>
            <p className="bling">{Number(this.props.product.price).toFixed(2)}</p>
          </div>
          <Link to="/cart"><button onClick={this.handleClick}>ADD TO CART</button></Link>
        </div>
        <div className="modalDialog-product" id="openModal-product">
          <div>
            <a className="close" href="#close" title="Close">X</a>
            <div id="product-modal">
              <div className="twelve columns" id="product-title">
                <h1>{this.props.product.name}</h1>
              </div>
              <div className="row" id="product-content">
                <div className="five columns" id="product-image">
                  <img id="modal-product-image" src={this.props.product.image} />
                </div>
                <div className="seven columns" id="product-details">
                  <div className="row" id="rating-row">
                    <p id="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></p>
                    <p id="number-of-reviews">117 reviews</p>
                  </div>
                  <div className="row">
                    <p id="price">{this.props.product.price}</p>
                    <p id="description">{this.props.product.description}</p>
                  <div className="row">
                      <a className="close" href="#close" title="Close">
                        <button
                          id="modal-product-btn"
                          onClick={this.handleClick}
                        >ADD TO CART
                        </button></a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default Products;
