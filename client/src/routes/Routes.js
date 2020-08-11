import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import components
import App from '../App';
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Activate from "../screens/Activate";
import {Home,Auth} from './PrivateRoutes';
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Home exact path="/" component={App} />
        <Auth path="/login" component={Login} />
        <Auth path="/signup" component={Signup} />
        <Auth path="/activate/:token" component={Activate} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
