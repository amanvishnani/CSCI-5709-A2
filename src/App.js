import React, { useState, useMemo } from 'react';
import './App.css';

import Landing from "./pages/Landing/Landing";
import Header from "./components/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OrderSummary from './pages/OrderSummary/OrderSummary';
import { OrderContext } from "./contexts/OrderContext";
import Payment from './pages/Payment/Payment';

function App() {

  const [order, setOrder] = useState({})
  const orderState = useMemo(() => ({ order, setOrder }), [order, setOrder]);
  return (
    <div className="App">
      <Router>
        <OrderContext.Provider value={orderState}>
          <Header />
          <Switch>
            <Router path="/payment">
              <Payment />
            </Router>
            <Route path="/quick-buy/:productId">
              <OrderSummary />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </OrderContext.Provider>
      </Router>
    </div>
  );
}

export default App;
