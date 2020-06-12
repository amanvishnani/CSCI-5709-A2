import React from 'react';
import './App.css';

import Landing from "./pages/Landing/Landing";
import Header from "./components/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OrderSummary from './pages/OrderSummary/OrderSummary';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/quick-buy/:productId">
            <OrderSummary />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
