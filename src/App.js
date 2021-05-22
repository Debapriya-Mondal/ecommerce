import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navBar";
import Login from "./components/Pages/Login/Login";
import Products from "./components/Pages/Products/Products";
import Cart from "./components/Pages/Cart/Cart";
import addProducts from "./components/Pages/addProducts/addProducts";
import { getUser } from "./Services/userService";
import Logout from "./components/Logout/Logout";
import checkOut from "./components/Pages/checkOut/checkOut";
class App extends Component {
  state = { user: {} };
  async componentDidMount() {
    const user = await getUser(localStorage.getItem("token"));
    this.setState({ user });
  }
  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/addProduct" component={addProducts} />
          <Route path="/checkOut" component={checkOut} />
          <Route path="/" exact component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
