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
import UserProfile from './pages/UserProfile/UserProfile';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {

  const [order, setOrder] = useState({})
  const orderState = useMemo(() => ({ order, setOrder }), [order, setOrder]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00CC66",
        contrastText: "#FFFFFF"
      },
      secondary: {
        main: "#F75C03",
      },
      danger: {
        main: "#e53e3e"
      }
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <OrderContext.Provider value={orderState}>
            <Header />
            <Switch>
              <Router path="/user">
                <UserProfile />
              </Router>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
