import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.jsx';
import HomePage from './pages/home/home.jsx';
import ShopPage from './pages/shop/shop.jsx';
import SignInSignUpPage from './pages/sign-in/sign-in.jsx';

import { auth } from './firebase/firebase.utils.js';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
  }

  componentWillUnmount () {
    // closing subscription when app unmounts
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shop" component={ ShopPage } />
          <Route path="/signin" component={ SignInSignUpPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
