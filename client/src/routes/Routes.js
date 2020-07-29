import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import components
import App from '../App';
import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
