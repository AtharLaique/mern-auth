import React, { Fragment } from "react";
import { StyleSheet, css } from "aphrodite";
import Nav from '../components/Nav';

const Layout = ({ children }) => {
  return (
    <Fragment>
        <Nav/>
      <div className="container">{children}</div>
    </Fragment>
  );
};
export default Layout;
let styles = StyleSheet.create({});
