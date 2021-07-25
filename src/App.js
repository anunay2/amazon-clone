import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Orders from "./Components/Orders";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  'pk_test_51JGyhASHXKeYu05XaQz2CPRSMelBkoZ9RIlfxd44ygPbKm9BAsEt3SKgd4LrT8XvYNUksEjJIAFQH9qRJhvyo6Ey00T9CcmpBG'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will run once when app component loads because we kept [] .
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);

      if (authUser) {
        //user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
          //user is logged out.
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
