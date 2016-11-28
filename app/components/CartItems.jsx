import { Link } from 'react-router';
import React from 'react';

const CartItems = React.createClass({
  render() {
    return (
      <section id="cart-items" className="cart">
            <div className="seven columns">
              <div className="product-image">
                <img src={this.props.product.image}/>
              </div>
            </div>
            <div className="two columns">

            </div>
            <div className="three columns">

            </div>
            {/* <img /> */}
            {/* State change: if we allow user to increase or descrease the quantity --> will affect quantity and price */}
            {/* <p>qty</p> */}
            {/* <p>price</p> */}
            {/* State change: remove item from cart */}
            {/* <button>x</button> */}
      </section>
    )
  }
});

export default CartItems;
