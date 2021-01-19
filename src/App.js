import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.jsx';
import HomePage from './pages/home/home.jsx';
import ShopPage from './pages/shop/shop.jsx';
import SignInPage from './pages/sign-in/sign-in.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions.js';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount () {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // listen to changes and update state
        userRef.onSnapshot(snapShot => {
          const currentUser = {
            id: snapShot.id,
            ...snapShot.data()
          };

          setCurrentUser(currentUser);
        })
      }

      // set currentUser to null if user logs out
      setCurrentUser(null);
    });
  }

  componentWillUnmount () {
    // closing subscription when app unmounts
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <section className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/shop" component={ ShopPage } />
            <Route path="/sign-in" component={ SignInPage } />
          </Switch>
        </main>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // prop name is whatever prop we want to pass
  // that dispathces the new action that we are trying to pass
  // which is SET_CURRENT_USER

  // dispatch is a way for redux to know
  // that whatever object is passed
  // is going to be an action object
  // that will be passed to EVERY reducer

  // invoking setCurrentUser that returns payload
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// the first argument is null as App doesn't need props from reducer
export default connect(null, mapDispatchToProps)(App);
