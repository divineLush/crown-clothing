import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.jsx';

import './App.css';

const HatsPage = () => (
  <section><h1>Hats page</h1></section>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/hats" component={ HatsPage } />
      </Switch>
    </div>
  );
}

export default App;
