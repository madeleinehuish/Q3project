import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import expect, { createSpy, spyOn, isSpy } from 'expect'
import axios from 'axios';

import BeardGuides from './guides/BeardGuides';
import Cart from './Cart';
import Customer from './checkout/Customer';
import Shipping from './checkout/Shipping';
import Payment from './checkout/Payment';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Guides from './guides/Guides';
import History from './History';
import Home from './Home';
import MustacheGuides from './guides/MustacheGuides';
import NotFound from './NotFound';
import ProductsList from './ProductsList';
import SearchBox from './SearchBox';
import Success from './checkout/Success';
import User from './user/User';

const App = React.createClass({

  getInitialState(){
    return {
      value: '',
      inputValue: '',
      signupFirstName: '',
      signupLastName: '',
      searchVisible: false,
      formComplete: false,
      shippingCost: 4.99,
      taxRate: 0,
      signupEmail: '',
      signupPassword: '', 
      cartItems: [],
      cartItemQty: false,
      products: [],
      defaultProducts: [],
      searchArray: [],
      sortType: '',
      loggedIn: false,
      currentUser: {},
      previousOrders: {},
      userInformation: [],
      email: '',
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      shipping: '',
      orderedAt: '',
      items: [],
      chargeTotal: '0',
      stripeToken: '',
      card: {
        number: '',
        cvc: '',
        exp_month: '',
        exp_year: ''
      }

    };
  },

  handleChangeCard(event) {
    let card = this.state.card;
    card[event.target.name] = event.target.value
    this.setState(card);
  },


  clearCart() {
    this.setState({ cartItems: []});
  },

  componentDidMount() {
    Stripe.setPublishableKey('pk_test_jXQn5jcYPOHMsujRjJiU85BA');
    axios.get('/api-products')
      .then(res => {
        this.setState({ products: res.data, defaultProducts: res.data, sortArray: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  displaySearch() {
    this.setState({ searchVisible: !this.state.searchVisible });
  //   render() {
  //     return (
  //       <SearchBox
  //         { ...this.state }
  //         handleSearch={this.handleSearch}
  //         value={this.state.value}
  //         // value={this.state.value}
  //     />
  //   )
  // }
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

  handleClickAdd(id, newQuantity) {
    const updatedCart = this.state.cartItems.map((productInCart) => {
      if (id !== productInCart.id) {
        return productInCart;
      }



    const newProduct = Object.assign({}, productInCart, { quantity: newQuantity });

    return newProduct;
    });
    this.setState({ cartItems: updatedCart });
  },

  handleRemoveFromCart(product) {
    const removeFromCart = this.state.cartItems.filter((element, index) => {
      return element.id !== product.id;
    });


    this.setState({ cartItems: removeFromCart });
  },

  handleSearch(event) {
    this.setState({ value: event.target.value });
    console.log("this state value " + this.state.value);
    console.log("etv " + event.target.value);

      let searchRender = this.state.products.filter((element) => {

        if(element.name.toUpperCase().includes(event.target.value.toUpperCase())) {
          return true;
        }
        return false;
      });

      if (!event.target.value) {
        this.setState({ products: this.state.defaultProducts })
        console.log('etv === ');
      } else {
          this.setState({ products : searchRender });
        }
  },

  handleSort(sortValue) {
    console.log(sortValue);
    let filteredProducts;
    let sortThis = this.state.defaultProducts;
    if (sortValue !== "all") {
      filteredProducts = sortThis.filter((element) => {

        return element.keywords.includes(sortValue)
      });
      this.setState({ products: filteredProducts })
    } else {
      this.setState({ products: this.state.defaultProducts });
    }

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

            const sortedOrders = res.data.sortedOrderItems;


            this.setState({ previousOrders: sortedOrders });
          })
          .catch((error) => {
            console.log(error);
          })
      })
      .then(() => {
        axios.get('api-orders/')
          .then(res => {
            console.log(res.data);

            // const allUsersData = res.data;
            // const userInfoUnique = allUsersData.filter((element) => {
            //
            //   return element.userId === this.state.currentUser.id;
            // });
            // // console.log(userInfoUnique);
            // this.setState({ userInformation: userInfoUnique});
            //
            // this.setState({
            //   firstName: this.state.currentUser.firstName,
            //   lastName: this.state.currentUser.lastName,
            //   email: this.state.currentUser.email,
            //   address1: this.state.userInformation[0].address1,
            //   city: this.state.userInformation[0].city,
            //   state: this.state.userInformation[0].state,
            //   zip: this.state.userInformation[0].zip
            // });


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

  // onFormChange(event) {
  //   this.setState({ [event.target.name] : event.target.value })
  // },

  onFormChange(event) {
    this.setState({ [event.target.name] : event.target.value })
    if (this.state.loggedIn) {
      this.setState( { email: this.state.currentUser.email })
      console.log( this.state.email );
    };

    const incompleteForm = (this.state.firstName === '' || this.state.lastName === '' ||
      this.state.address1 === '' || this.state.city === '' || this.state.zip === '' || this.state.email === '')
        ;
    // if (loggedIn) { Object.assign({}, currentUser, { email: newQuantity });}
    this.setState({ formComplete: !incompleteForm });

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

  onSubmitToGetToken: function (event) {
    event.preventDefault();
    Stripe.createToken(this.state.card, (status, response) => {
      console.log( status, response );
      this.setState({ stripeToken: response.id});
    });
  },

  onSubmitOrder(event) {
    console.log('order submitted');

    const cartItems = this.state.cartItems;
    const address1 = this.state.address1;
    const address2 = this.state.address2;
    const city = this.state.city;
    const state = this.state.state;
    const zip = this.state.zip;
    const stripeToken = this.state.stripeToken;

    const ci = this.state.cartItems;
     let chargeTotal = (ci.reduce((amount, curr, index) => {
       return amount + ((curr.price * curr.quantity) * this.state.taxRate) + (curr.price * curr.quantity)
       + this.state.shippingCost;
     }, 0));
     chargeTotal = Math.round(chargeTotal * 100) / 100;
     console.log('updated total is ' + chargeTotal);


    // const chargeTotal = JSON.stringify(this.state.chargeTotal);
    // const chargeTotal = 400;
    // console.log('chargeTotal is ' + chargeTotal);
    // Stripe.createToken(this.state.card, function (status, response) {
    //   console.log( status, response );
    // });

    // Stripe.createToken(this.state.card, (status, response) => {
    //   console.log( status, response );
    // });

        axios.post('/api-orders', { cartItems, address1, address2, city, state, zip, chargeTotal, stripeToken })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });




      // Stripe.createToken(this.state.card, function (status, response) {
      //   console.log( status, response );
      // });
      //
      // axios.post('/api-orders', { cartItems, address1, address2, city, state, zip, chargeTotal })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
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

  selectShipping(shipping) {
    let shippingCost;

    if (shipping === 'standard') {
      shippingCost = 4.99;
    }
    if (shipping === 'premium') {
      shippingCost = 9.99;
    }
    if (shipping === 'fedex') {
      shippingCost = 24.99;
    }

    this.setState({ shippingCost })
  },


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
    const zipcode = event.target.value;
    let numberPattern = /^\d{5}$/g;
    const taxRate = this.state.taxRate;
    let userTax;

    numberPattern.test(zipcode.trim())

    axios.get(`https://taxrates.api.avalara.com:443/postal?country=usa&postal=` + zipcode.trim() +
              `&apikey=uHzyARYbSWUoeb7F9%2F1alRcmI8kTeWanW7FCGoWV4SbMvUY0NQ%2BH8JUs%2Bxl2wTqc8AAGF1ew3XPEapKh0tP1vw%3D%3D`)
      .then(res => {
        userTax = res.data.totalRate / 100;
        this.setState({ taxRate: userTax })
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
          {/* <Miss pattern="/SearchBox" render={
            () =>  */}
            {/* <SearchBox
              { ...this.state }
              handleSearch={this.handleSearch}
              value={this.state.value}
              // value={this.state.value}
          /> */}
          {/* }/> */}
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
              handleSort={this.handleSort}
              searchFilter={this.searchFilter}
              value={this.state.value}
              inputValue={this.state.inputValue}
            />
            }/>
          <Match pattern="/cart" exactly render={
            () => <Cart
              { ...this.state }
              cartItemCount={this.cartItemCount}
              handleRemoveFromCart={this.handleRemoveFromCart}
              handleClickAdd={this.handleClickAdd}

            />
          }/>
          <Match pattern="/customer-checkout" exactly render={
            () => <Customer
              { ...this.state }
              handleAddToCart={this.handleAddToCart}
              logOut={this.logOut}
              // firstName={ this.firstName }
              // email={ this.email }
              // lastName={ this.lastName }
              // address1={ this.address1 }
              // city={ this.city }
              // state={ this.state }
              // zip={ this.zip }
              onFormChange={ this.onFormChange }
              setTaxRate={this.setTaxRate}
              infoFormSubmission={this.infoFormSubmission}
              currentUser={this.state.currentUser}
            />
          }/>
          <Match pattern="/shipping" exactly render={
            () => <Shipping
              { ...this.state }
              currentUser={this.state.currentUser}
              selectShipping={this.selectShipping}
            />
          }/>
          <Match pattern="/payment" exactly render={
            () => <Payment
              { ...this.state }
              onSubmitOrder={this.onSubmitOrder}
              onSubmitToGetToken={this.onSubmitToGetToken}
              clearCart={this.clearCart}
              handleChange={this.handleChangeCard}
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
          <Match pattern="/user" exactly render={
            () => <User
            { ...this.state }
              logOut={this.logOut}
              currentUser={this.state.currentUser}
              userOrders={this.userOrders}
              previousOrders={this.state.previousOrders}
              userInformation={this.state.userInformation}
            />
          }/>
          <Match pattern="/guides" exactly render={
            () => <Guides
              { ...this.state }

            />
          }/>
          <Match pattern="/beard-guides" exactly render={
            () => <BeardGuides
            { ...this.state }
            />
          }/>
          <Match pattern="/stache-guides" exactly render={
            () => <MustacheGuides
            { ...this.state }
            />
          }/>
          <Miss component={ NotFound } />
          <Footer />
        </main>
      </BrowserRouter>
    )
  }
});

export default App;
