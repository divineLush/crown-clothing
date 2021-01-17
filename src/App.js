import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.jsx';
import HomePage from './pages/home/home.jsx';
import ShopPage from './pages/shop/shop.jsx';
import SignInSignUpPage from './pages/sign-in/sign-in.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // listen to changes and update state
        userRef.onSnapshot(snapShot => {
          const currentUser = {
            id: snapShot.id,
            ...snapShot.data()
          };

          this.setState({ currentUser });
        })
      }

      // set currentUser to null if user logs out
      this.setState({ currentUser: null });
    });
  }

  componentWillUnmount () {
    // closing subscription when app unmounts
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <section className="App">
        <Header currentUser={ this.state.currentUser } />
        <main>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/shop" component={ ShopPage } />
            <Route path="/signin" component={ SignInSignUpPage } />
          </Switch>
        </main>
      </section>
    );
  }
}

export default App;
