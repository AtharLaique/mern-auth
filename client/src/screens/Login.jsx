import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <Layout>
      <div class="row">
        <div className="col-sm-3 col-md-4 col-lg-4"></div>
        <div className="col-sm-6 col-md-4 col-lg-4">
            <Card title="Login">
                <Input 
                label="Email"
                placeholder="Enter Your Email ..."
                id="email"
                name="email"
                type="email"
                />
                 <Input 
                label="Password"
                placeholder="Enter Your Password ..."
                id="password"
                name="password"
                type="password"
                />
                    <Button title="Go!"/>
            </Card>
        </div>
        <div className="col-sm-3 col-md-4 col-lg-4"></div>
      </div>
    </Layout>
  );
};
export default Login;
