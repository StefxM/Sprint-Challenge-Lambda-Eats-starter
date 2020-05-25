import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Pizza from "./Pizza";
import Homepage from "./homepage";

const App = () => {
  return (
    <Router>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      <Link to="/pizza"> Build your pizza!</Link>
        
        <Route path="/">
            <Homepage />
        </Route>
        <Switch>
        <Route path="/pizza">
            <Pizza/>
        </Route>
        </Switch>
    </Router>
  );
};
export default App;