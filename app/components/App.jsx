import React from 'react';
// import request from 'request';
import { BrowserRouter, Match, Miss } from 'react-router';
import expect, { createSpy, spyOn, isSpy } from 'expect'
import axios from 'axios';

import Cart from './Cart';
// import Checkout from './checkout/Checkout';
import Customer from './checkout/Customer';
import Shipping from './checkout/Shipping';
import Payment from './checkout/Payment';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Guides from './Guides';
import History from './History';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import ProductsList from './ProductsList';
import Signup from './Signup';
import Success from './checkout/Success';
import User from './User';
import Test from './Test';

const App = React.createClass({
  getInitialState(){
    return {
      value: '',
      inputValue: '',
      signupFirstName: '',
      signupLastName: '',
      signupEmail: '',
      signupPassword: '',
      cartItems: [],
      products: [],
      loggedIn: false,
      currentUser: {},
      ordersFromDb: {},
      orderItemsFromDb: {}
    };
  },

  handleAddToCart(product) {
    let productNotInCart = true;
    const updatedCart = this.state.cartItems.map((productInCart) => {
      if (product.id !== productInCart.id) {
        return productInCart;
      }

      productNotInCart = false;

      const updateQuantity = (productInCart.quantity || 0) + 1;

      const newProduct = Object.assign({}, productInCart, { quantity: updateQuantity });

      return newProduct;
    });

    if (productNotInCart) {
      const newProduct = Object.assign({}, product, { quantity: 1 });
      updatedCart.push(newProduct);
    }

    this.setState({ cartItems: updatedCart });
  },

  handleRemoveFromCart(product) {
    const removeFromCart = this.state.cartItems.filter((element, index) => {
      return element.id !== product.id;
    });

    this.setState({ cartItems: removeFromCart });
  },

  cartItemCount() {
    let itemQuantity = 0;

    for (let i = 0; i < this.items.length; i++) {
      itemQuantity += parseInt(this.items[i].quantity);
    }

    return itemQuantity;
  },

  componentDidMount() {
    axios.get('/api-products')
      .then(res => {
        this.setState({ products: res.data });
        axios.get('/api-orders')
          .then(res => {
            this.setState({ ordersFromDb: res.data});
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // userOrders() {
  //   axios.get(`/api-orders/${this.state.currentUser.id}`)
  //     .then(res => {
  //       this.setState({ ordersFromDb: res.data });
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // },

  onFormChangeFirstName(event) {
    this.setState({signupFirstName: event.target.value}, () => {

    });
  },

  onFormChangeLastName(event) {
    this.setState({signupLastName: event.target.value});

  },

  onFormChangeEmail(event) {
    this.setState({signupEmail: event.target.value}, () => {

    });
  },

  onFormChangePassword(event) {
    this.setState({signupPassword: event.target.value}, () => {

    });
  },

  logIn(user) {
    this.setState({ loggedIn : true });
    this.setState({ currentUser: user.data}, () => {
      axios.get(`api-orders/order_items/${this.state.currentUser.id}`)
        .then(res => {
          console.log(res);
          this.setState({ orderItemsFromDb: res.data });

        })
        .catch((error) => {
          console.log(error);
        })
    });


  },

  onSubmit(event) {

      // event.preventDefault();
      const firstName = this.state.signupFirstName;
      const lastName = this.state.signupLastName;
      const email = this.state.signupEmail;
      const password = this.state.signupPassword;

      if (!firstName) {
        alert('First name must not be blank');
      }
      if (!lastName) {
        alert('Last name must not be blank');
      }
      if (!email) {
        alert('Email must not be blank.');
      }
      if (email.indexOf('@') < 0) {
        alert('Email must be valid.');
      }
      if (!password || password.length < 8) {
        alert('Password must be valid.');
      }

      axios.post('/api-users', { firstName, lastName, email, password })
        .then((response) => {
          console.log(response);
          axios.post('/api-token', { email, password })
            .then((user) => {
              sessionStorage.setItem('userId', user.id);
              // this.setState({ loggedIn : true });
              // this.setState({ currentUser: user.data});
              this.logIn(user);
              console.log('got through');
              // window.location.href = '/main.html';
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });

  },

  onSubmitLogin(event) {
      // event.preventDefault();
    const email = this.state.signupEmail;
    const password = this.state.signupPassword;

  if (!email) {
    alert('Email must not be blank');
  }
  if (!password) {
    alert('Password must not be blank');
  }

  axios.post('/api-token', { email, password })
    .then((user) => {
      sessionStorage.setItem('userId', user.id);
      // this.setState({ loggedIn : true });
      // this.setState({ currentUser: user.data});
      this.logIn(user);
      console.log(this.state.currentUser.firstName);
      console.log('logged in = ' + this.state.loggedIn)
    })
    .catch(function (error) {
      console.log(error);
    });

  },

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} logOut={this.logOut}/>
          <Match pattern="/" exactly render={
          () => <Home
              { ...this.state }
          />
          }/>
          <Match pattern="/login" exactly render={
            () => <Login
              { ...this.state }
              onSubmitLogin={this.onSubmitLogin}
              inputValue={this.state.value}
              onFormChangeEmail={this.onFormChangeEmail}
              onFormChangePassword={this.onFormChangePassword}
              signUpEmail={this.state.signUpEmail}
              signUpPassword={this.state.signUpPassword}
            />
          }/>
          <Match pattern="/signup" exactly render={
            () => <Signup
              { ...this.state }
              onSubmit={this.onSubmit}
              inputValue={this.state.value}
              onFormChangeFirstName={this.onFormChangeFirstName}
              onFormChangeLastName={this.onFormChangeLastName}
              onFormChangeEmail={this.onFormChangeEmail}
              onFormChangePassword={this.onFormChangePassword}
              signUpFirstName={this.state.signUpFirstName}
              signUpLastName={this.state.signUpLastName}
              signUpEmail={this.state.signUpEmail}
              signUpPassword={this.state.signUpPassword}
            />
          }/>
          <Match pattern="/productslist" exactly render={
            () => <ProductsList
              { ...this.state }
              handleAddToCart={this.handleAddToCart}
            />
            }/>
          <Match pattern="/cart" exactly render={
            () => <Cart
              { ...this.state }
              cartItemCount={this.cartItemCount}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />
          }/>
          <Match pattern="/customer-checkout" exactly render={
            () => <Customer
              { ...this.state }
              handleAddToCart={this.handleAddToCart}
              logOut={this.logOut}
            />
          }/>
          <Match pattern="/shipping" exactly render={
            () => <Shipping
              { ...this.state }

            />
          }/>
          <Match pattern="/payment" exactly render={
            () => <Payment
              { ...this.state }

            />
          }/>
          <Match pattern="/success" exactly render={
            () => <Success
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
          <Match pattern="/user" exactly render={
            () => <User
            { ...this.state }
              logOut={this.logOut}
              currentUser={this.state.currentUser}
              userOrders={this.userOrders}
            />
          }/>
          <Match pattern="/test" exactly render={
            () => <Test
            { ...this.state }

            />
          }/>
          <Footer />
          <Miss component={ NotFound } />
        </main>
      </BrowserRouter>
    )
  }
});

export default App;
