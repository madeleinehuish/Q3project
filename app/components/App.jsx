import React from 'react';
// import request from 'request';
import { BrowserRouter, Match, Miss } from 'react-router';
import expect, { createSpy, spyOn, isSpy } from 'expect'
import axios from 'axios';
// import ErrorLogger from './ErrorLogger';

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
// import Signup from './Signup';
import Success from './checkout/Success';
import User from './user/User';
import Test from './Test';

const App = React.createClass({
  getInitialState(){
    return {
      value: '',
      inputValue: '',
      signupFirstName: '',
      signupLastName: '',
      searchVisible: false,
      taxRate: 0,
      signupEmail: '',
      signupPassword: '',
      cartItems: [],
      products: [],
      loggedIn: false,
      currentUser: {},
      previousOrders: {},
      userInformation: [],
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        shipping: '',
        orderedAt: '',
        items: []
    };
  },

  componentDidMount() {
    axios.get('/api-products')
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  onFormChange(event) {
    this.setState({ [event.target.name] : event.target.value })
  },

  logIn(user) {
    const email = this.state.signupEmail;
    const password = this.state.signupPassword;

    if (!email) {
      alert('Email must not be blank');
    }
    if (!password) {
      alert('Password must not be blank');
    }

    axios.post('/api-token', { email, password })
      .then((res) => {
        sessionStorage.setItem('userId', res.data.id);
        this.setState({ loggedIn : true, currentUser: res.data });
        console.log('logged in = ' + this.state.loggedIn)
      })
      .then(() => {
        axios.get(`/api-orders/${this.state.currentUser.id}`)
          .then((res) => {
            console.log(res.data);
            const sortedOrders = res.data.sortedOrderItems;
            console.log(sortedOrders);
            // const filteredOrders = newData.filter((element)=> {
            //     return element.userId === 2;
            //   })
            // this.setState({ previousOrders: res.data });
            this.setState({ previousOrders: sortedOrders });
          })
          .catch((error) => {
            console.log(error);
          })
      })
      .then(() => {
        axios.get('api-orders/')
          .then(res => {

            this.setState({ userInformation: res.data });

            // const newData = res.data;
            // this.setState({ previousOrders: filteredOrders });

          })
          .catch((error) => {
            console.log(error);
          })
      })
      .catch(function (error) {
        console.log(error);
      });

  },

  logOut() {
    this.setState({
      loggedIn: false,
      currentUser: {},
      previousOrders: {}
    });
  },

  onSubmit(event) {
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
        axios.post('/api-token', { email, password })
          .then((res) => {
            sessionStorage.setItem('userId', res.data.id);
            this.setState({ loggedIn : true, currentUser: res.data });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
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

  // cartItemCount() {
  //   let itemQuantity = 0;
  //
  //   for (let i = 0; i < this.items.length; i++) {
  //     itemQuantity += parseInt(this.items[i].quantity);
  //   }
  //
  //   return itemQuantity;
  // },

  displaySearch() {
    this.setState({ searchVisible: !this.state.searchVisible });
  },

  // handleSearch(event) {
  //   const inputValue = event.target.value.toLowerCase();
  //
  //   this.setState({ inputValue })
  // },
  //
  // searchFilter() {
  //   const inputValue = this.state.inputValue;
  //   const products = this.state.products;
  //   const filteredProducts = this.state.products.filter((element) => {
  //     return element.name.toLowerCase().includes(inputValue);
  //   });
  //
  //   return filteredProducts;
  // },

  setTaxRate(event) {
    const zip = event.target.value;
    let numberPattern = /^\d{5}$/g;
    const taxRate = this.state.taxRate;
    let userTax;

    numberPattern.test(zip.trim())

    axios.get(`https://taxrates.api.avalara.com:443/postal?country=usa&postal=` + zip.trim() +
              `&apikey=uHzyARYbSWUoeb7F9%2F1alRcmI8kTeWanW7FCGoWV4SbMvUY0NQ%2BH8JUs%2Bxl2wTqc8AAGF1ew3XPEapKh0tP1vw%3D%3D`)
      .then(res => {
        userTax = res.data.totalRate / 100;
        console.log(userTax);
        this.setState({ taxRate: userTax })
        console.log(taxRate);
      })
      .catch((err) => {
        this.setState({ loadErr: err });
      });
  },

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header
              { ...this.state }
              logIn={this.logIn}
              logOut={this.logOut}
              // onSubmitLogin={this.onSubmitLogin}
              onSubmit={this.onSubmit}
              // inputValue={this.state.value}
              // handleChange={this.handleChange}
              onFormChange={this.onFormChange}
              // onFormChangeFirstName={this.onFormChangeFirstName}
              // onFormChangeLastName={this.onFormChangeLastName}
              // onFormChangeEmail={this.onFormChangeEmail}
              // onFormChangePassword={this.onFormChangePassword}
              signUpFirstName={this.state.signUpFirstName}
              signUpLastName={this.state.signUpLastName}
              signUpEmail={this.state.signUpEmail}
              signUpPassword={this.state.signUpPassword}
            />
          <Match pattern="/" exactly render={
          () => <Home
              { ...this.state }
          />
          }/>
          <Match pattern="/productslist" exactly render={
            () => <ProductsList
              { ...this.state }
              handleAddToCart={this.handleAddToCart}
              displaySearch={this.displaySearch}
              handleSearch={this.handleSearch}
              searchFilter={this.searchFilter}
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
              firstName={ this.state.firstName }
              lastName={ this.state.lastName }
              address1={ this.state.address1 }
              city={ this.state.city }
              state={ this.state.state }
              zip={ this.state.zip }
              onFormChange={ this.onFormChange }
              setTaxRate={this.setTaxRate}
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
              previousOrders={this.state.previousOrders}
            />
          }/>
          {/* <Match pattern="/test" exactly render={
            () => <Test
            { ...this.state }

            />
          }/> */}
          <Miss component={ NotFound } />
          <Footer />
        </main>
      </BrowserRouter>
    )
  }
});

export default App;
