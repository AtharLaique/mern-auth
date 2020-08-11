import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import components
import App from '../App';
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Activate from "../screens/Activate";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/activate/:token" component={Activate} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
