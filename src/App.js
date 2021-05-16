import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import Login from "./components/Login";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
