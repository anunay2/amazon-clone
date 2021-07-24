import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import {auth} from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";


function App() {
  const [{},dispatch] = useStateValue();
  useEffect (() => {
    //will run once when app component loads because we kept [] .
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>',authUser);

      if(authUser){
        //user just logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user : null
          //user is logged out.
        })
     
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout />
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
