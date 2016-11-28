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
      currentUser: {}
    };
  },

  componentDidMount() {
    axios.get('/api-products')
      .then(res => {
        this.setState({ products: res.data });
      }
    )
      .catch(function (error) {
        console.log(error);
      });
  },

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
              this.setState({ loggedIn : true });
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
      this.setState({ loggedIn : true });
      this.setState({ currentUser: user.data});
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
          <Header loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/>
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
              // onRender={this.onRender}
            />
          }/>
          <Match pattern="/cart" exactly render={
            () => <Cart
            { ...this.state }
            products={this.state.products}
            />
          }/>
          <Match pattern="/customer-checkout" exactly render={
            () => <Customer
            { ...this.state }

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
          <Footer />
          <Miss component={NotFound} />
        </main>
      </BrowserRouter>
    )
  }
});

export default App;
