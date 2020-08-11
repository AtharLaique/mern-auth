import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

//@------

export const Home = ({ component: Component, ...rest }) => {
  const { isLogin } = useSelector((state) => state.auth);
  const {path}=rest;
  console.log(path)
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLogin) {//false
           return <Redirect to='/login' />;
        } else if (isLogin) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export const Auth = ({ component: Component, ...rest }) => {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogin) {
          return <Redirect to='/'/>;
        } else if (!isLogin) {
          return <Component {...props} />;
        }
      }}
    />
  );
};
