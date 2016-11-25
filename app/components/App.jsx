import React from 'react';
import { BrowserRouter } from 'react-router';
import { Match } from 'react-router';
import { Miss } from 'react-router';
import expect, { createSpy, spyOn, isSpy } from 'expect'
import axios from 'axios';
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

const App = React.createClass({
  getInitialState(){
    return {
      value: '',
      inputValue: '',
      signupFirstName: '',
      signupLastName: '',
      signupEmail: '',
      signupPassword: ''

    };
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
    alert(this.state.signupFirstName + " " + this.state.signupLastName + " " + this.state.signupEmail + " " + this.state.signupPassword);
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
      // if (!password || password.length < 8) {
      //   alert('Password must be valid.');
      // }

      const createUserSettings = {
        // responseType: 'json',
        // headers: {
        //   contentType: 'json'
        // },
        contentType: 'application/json',
        data: JSON.stringify({ firstName, lastName, email, password }),
        dataType: 'json',
        type: 'POST',
        url: '/api-users'
      };


        // axios.post(createUserSettings)
        axios.post('/api-users', ({ firstName, lastName, email, password }))
        // axios.post('api-users', {
        //   headers: {
        //       'Content-Type': 'application/json',
        //       'Data-Type': 'json'
        //   },
        //   data: ({ firstName, lastName, email, password })
        //
        // })
          .then((response) => {
            // let newData = JSON.parse(response.config.url.data);
            // console.log(newData);
            // console.log(newData.email);
            // const createTokenSettings = {
            //   contentType: 'application/json',
            //   data: JSON.stringify({ newData.email, newData.password }),
            //   dataType: 'json',
            //   type: 'POST',
            //   url: '/api-token'
            // };

            // axios.post(createTokenSettings)
            //   .then((user) => {
            //     sessionStorage.setItem('userId', user.id);
            //     console.log('got through');
            //     // window.location.href = '/main.html';
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
            console.log(response);
          })
        .catch(function (error) {
          console.log(error);
        });

  },
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
