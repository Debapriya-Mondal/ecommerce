import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navBar";
import Login from "./components/Pages/Login/Login";
import Products from "./components/Pages/Products/Products";
import Cart from "./components/Pages/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Products} />
      </Switch>
    </div>
  );
}

export default App;
