import { BrowserRouter } from 'react-router';
import Header from './layouts/Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Products from './Products';
import Cart from './Cart';
import Checkout from './checkout/Checkout';
import History from './History';
import Guides from './Guides';
import NotFound from './NotFound';
import Footer from './layouts/Footer';
import { Match } from 'react-router';
import { Miss } from 'react-router';
import React from 'react';

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Match pattern="/" exactly render={
          () => <Home
            { ...this.state }

          />
          }/>
          <Match pattern="/login" exactly render={
            () => <Login
            { ...this.state }

            />
          }/>
          <Match pattern="/signup" exactly render={
            () => <Signup
            { ...this.state }

            />
          }/>
          <Match pattern="/products" exactly render={
            () => <Products
            { ...this.state }

            />
          }/>
          <Match pattern="/cart" exactly render={
            () => <Cart
            { ...this.state }

            />
          }/>
          <Match pattern="/checkout" exactly render={
            () => <Checkout
            { ...this.state }

            />
          }/>
          <Match pattern="/history" exactly render={
            () => <History
            { ...this.state }

            />
          }/>
          <Match pattern="/guides" exactly render={
            () => <Guides
            { ...this.state }

            />
          }/>
          <Footer />
          <Miss component={NotFound} />
        </main>
      </BrowserRouter>
    )
  }
});

export default App;
