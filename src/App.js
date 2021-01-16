import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home.jsx';
import ShopPage from './pages/shop/shop.jsx';

import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/shop" component={ ShopPage } />
    </Switch>
  </div>
);

export default App;
