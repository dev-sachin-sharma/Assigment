import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import AddProduct from "./components/AddProduct";
import Homepage from "./components/Homepage";

function App() {
  const isAuthentic = useSelector((state) => state.products.isAuth);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        {isAuthentic && (
          <Route exact path="/add">
            <AddProduct />
          </Route>
        )}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
