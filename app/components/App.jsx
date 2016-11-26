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
      signupPassword: '',
      products: [{
        id: 1,
        name: 'Kent Beard and Moustache Comb, Fine',
        image: 'http://www.westcoastshaving.com/resize/shared/images/kent-beard-and-moustache-comb-fine.jpg',
        rating: 4.5,
        price: 5.5,
        description: 'Kent Extra Small Men\'s moustache and beard comb is 73mm fine toothed comb. This specialist comb is perfect for grooming, maintaining and trimming facial hair.',
        keywords: 'moustache, beard, comb',
        on_sale: false
      }, {
        id: 2,
        name: 'Firehourse Moustache Wax, Wacky Tacky',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Firehouse-Moustache-Wax-Wacky-Tacky/firehouse-moustache-wax-tacky-new.jpg',
        rating: 5,
        price: 14,
        description: 'This Firehouse Moustache Wax, Wacky Tacky offers the firmest possible hold, so if your facial hair is sparse, thin, or just generally hard to manage, this is the product for you.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 3,
        name: 'Captain Fawcett\'s Moustache Wax Expedition Strength',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Captain-Fawcett-s-Moustache-Wax-Expedition-Strength/captain-fawcetts-moustache-wax-expedition-strength-new.jpg',
        rating: 4,
        price: 17,
        description: 'Have you ever gone exploring and found that your mustache wax just didn\'t hold up? Maybe it\'s because you weren\'t using Captain Fawcett\'s Expedition Strength wax. This product gives you a very firm hold, which is great for guys who really want to go for that old-fashioned look, handlebars and all.',
        keywords: 'moustache, wax',
        on_sale: true
      }, {
        id: 4,
        name: 'Doc Elliott Bread Balm, Rugged',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Doc-Elliott-Beard-Balm-Rugged/doc-elliott-beard-balm-rugged.jpg',
        rating: 5,
        price: 18,
        description: 'Doc Elliott Beard Balm, Rugged brings you a product that meets your need for an all-natural, authentic, great smelling product that offers hold and conditioning. Established in 2012, Doc Elliott values the tradition of men\'s grooming while also remaining innovative and fresh.',
        keywords: 'beard, wax',
        on_sale: false
      }]
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
