import React from 'react';
// import request from 'request';
import { BrowserRouter } from 'react-router';
import { Match } from 'react-router';
import { Miss } from 'react-router';
import expect, { createSpy, spyOn, isSpy } from 'expect'
import axios from 'axios';
import Header from './layouts/Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ProductsList from './ProductsList';
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
      signupPassword: '',
      cartItems: [],
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
      }, {
        id: 5,
        name: 'Firehouse Moustache Wax, Dark',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Firehouse-Moustache-Wax-Dark/firehouse-moustache-wax-dark-new.jpg',
        rating: 5,
        price: 14,
        description: 'You\'ll find that this Firehouse Moustache Wax, Dark is very easy to apply and that it offers a firm hold that lasts a long time.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 6,
        name: 'Billy Jealousy Beard Envy Kit',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Billy-Jealousy-Beard-Envy-Kit/billy-jealousy-beard-envy-kit.jpg',
        rating: 3,
        price: 25,
        description: 'So many modern men want to express their personalities through their facial hair. The trick is in doing so without looking like a grizzly bear or a man who\'s just escaped the Alaskan wilderness. To have that right balance of self-expression and taste, one needs to have the right tools and products. Whether you\'re at home or on the go, the Billy Jealousy Beard Envy Kit is perfect for keeping your whiskers just the way you want them.',
        keywords: 'beard, kit, wash, brush, conditioner',
        on_sale: true
      }, {
        id: 7,
        name: 'Brooklyn Grooming Classic Beard Balm, Wiliamsburg',
        image: 'http://www.westcoastshaving.com/resize/shared/images/brooklyn-grooming-classic-beard-balm-williamsburg.jpg',
        rating: 3.5,
        price: 26,
        description: 'Choose only the right product for your facial hair! The Brooklyn Grooming Classic Beard Balm, Williamsburg is the perfect one to moisturize and style your bush. Its non comedogenic property makes it the perfect styling pomade without the dry feeling. Infused with various moisturizing oils like Grape seed, Sesame, Argan, and Jojoba, this formula will surely keep your beard properly moisturized.',
        keywords: 'beard, balm',
        on_sale: false
      }, {
        id: 8,
        name: 'Captain Fawcett\'s Moustache Wax, Sandalwood',
        image: 'http://www.westcoastshaving.com/resize/shared/images/captain-fawcetts-moustache-wax-sandalwood.jpg',
        rating: 5,
        price: 16,
        description: 'Captain Fawcett makes some great grooming products and this sandalwood scented mustache wax is certainly among them. It has a medium hold, which is perfect for most people.',
        keywords: 'moustache, wax',
        on_sale: false
      }, {
        id: 9,
        name: 'Cowboy Comb, Black',
        image: 'http://www.westcoastshaving.com/resize/shared/images/cowboy-comb-black.jpg',
        rating: 3.5,
        price: 5.99,
        description: 'Mustaches are all the rage these days, but for those who actually have one, maintaining them really does require special care. Enter the Cowboy Comb. . . the comb that started a legacy. Shaped like and perfectly contoured for mustaches, it has 27 teeth, is black in color and is perfect for grooming the hair right under your nose.',
        keywords: 'moustache, comb',
        on_sale: false
      }, {
        id: 10,
        name: 'Prospector Co. Burroughs Beard Oil',
        image: 'http://www.westcoastshaving.com/resize/shared/images/prospector-co.-burroughs-beard-oil.jpg',
        rating: 5,
        price: 28,
        description: 'Have you ever heard of beard oil? No, it\'s not something that you harvest by squeezing some unfortunate man\'s facial hair. It is actually a product that you use to help keep the hair on a man\'s face looking and smelling great, and Prospector Co. Burroughs Beard Oil could be just what you need to keep your own face fur in top condition.',
        keywords: 'beard, oil',
        on_sale: false
      }, {
        id: 11,
        name: 'Beard Balm',
        image: 'http://www.westcoastshaving.com/resize/Shared/Images/Product/Beard-Balm/beard-balm.jpg',
        rating: 4.5,
        price: 15.99,
        description: 'Beard Balm is a wonderful product made for our friends with a little of facial scruff. Hand-crafted in Detroit, it contains the best all-natural ingredients, including the oil of grapeseed and coconut and other pure essential oils. These oils give this product a light, fresh scent that you will love to rub into your whiskers and keep near your sniffer all day long. It\'s a natural scent that will keep you coming back each day and will make the ladies take notice.',
        keywords: 'beard, balm',
        on_sale: false
      }, {
        id: 12,
        name: 'Beardbrand Beard Oil, Spiced Citrus',
        image: 'http://www.westcoastshaving.com/resize/shared/images/beardbrand-beard-oil-spiced-citrus.jpg',
        rating: 3,
        price: 22,
        description: 'Made with the finest blend of oils, Beardbrand Beard Oil, Spiced Citrus will leave your beard feeling and smelling amazing. This stuff is the real deal.',
        keywords: 'beard, oil',
        on_sale: true
      }]
    };
  },

  // onRender() {
  //   const productsList = products.map((product, index) => {
  //     return
  //       product={product}
  //       key={index}
  //   })
  //
  //   console.log(productsList);
  //   return productsList
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
      // if (!lastName) {
      //   alert('Last name must not be blank');
      // }
      // if (!email) {
      //   alert('Email must not be blank.');
      // }
      // if (email.indexOf('@') < 0) {
      //   alert('Email must be valid.');
      // }
      // if (!password || password.length < 8) {
      //   alert('Password must be valid.');
      // }

      // const createUserSettings = {
      //   // responseType: 'json',
      //   // headers: {
      //   //   contentType: 'json'
      //   // },
      //   contentType: 'application/json',
      //   data: ({ firstName, lastName, email, password }),
      //   dataType: 'json',
      //   type: 'POST',
      //   url: '/api-users'
      // };



      // let xhr = new XMLHttpRequest();
      // xhr.open("POST", '/api-users', true);
      // xhr.setRequestHeader("Content-type", "application/json");
      // xhr.onreadystatechange = () => {
      //   if (xhr.readyState == 4 && xhr.status == 200) {
      //     var json = JSON.parse(xhr.responseText);
      //     console.log(json.email + ", " + json.password)
      //   }
      // }
      // let data = JSON.stringify({ firstName, lastName, email, password });
      // xhr.send(data);
        // axios.post(createUserSettings)
        // axios.post('/api-users', 'firstName')
        axios.post('/api-users', { firstName, lastName, email, password })
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
            console.log('response came back');
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
