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
      console.log(this.state.signupFirstName);
    });
  },

  onFormChangeLastName(event) {
    this.setState({signupLastName: event.target.value});
    console.log(this.state.signupLastName);
  },

  onFormChangeEmail(event) {
    this.setState({signupEmail: event.target.value}, () => {
      console.log(this.state.signupEmail);
    });
  },

  onFormChangePassword(event) {
    this.setState({signupPassword: event.target.value}, () => {
      console.log(this.state.signupPassword);
    });
  },

  onSubmit(event) {
    alert(this.state.signupFirstName + " " + this.state.signupLastName + " " + this.state.signupEmail + " " + this.state.signupPassword);
    // event.preventDefault();
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
            // onFirstNameInput={this.onFirstNameInput}
            // onLastNameInput={this.onLastNameInput}
            // onEmailInput={this.onEmailInput}
            // onPasswordInput={this.onPasswordInput}
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
            // inputValueLastName={this.state.value.lastName}
            // inputValueEmail={this.state.value.email}
            // inputValuePassword={this.state.value.password}


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
