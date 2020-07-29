import React, { Component } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import CenterGrid from "../components/CenterGrid";
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  onChangeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitForm = () => {
    const { name, email, password } = this.state;
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}auth/signup`,
      data: {name,email,password}
    }).then(responce=>{
      console.log(responce)
    })
    .catch(error=>{
      console.log("catch is called")
      console.log(error.responce)
    })
   };
  render() {
    let { name, email, password } = this.state;
    return (
      <Layout>
        <CenterGrid>
          <Card title="Signup">
            <Input
              label="Name"
              placeholder="Enter Your Name ..."
              id="name"
              name="name"
              type="name"
              value={name}
              onChangeValue={this.onChangeValue}
            />
            <Input
              label="Email"
              placeholder="Enter Your Email ..."
              id="email"
              name="email"
              type="email"
              value={email}
              onChangeValue={this.onChangeValue}
            />
            <Input
              label="Password"
              placeholder="Enter Your Password ..."
              id="password"
              name="password"
              type="password"
              value={password}
              onChangeValue={this.onChangeValue}
            />
              <Button title="Create Your Acount !"  onClick={this.onSubmitForm}/>
          </Card>
        </CenterGrid>
      </Layout>
    );
  }
}

export default Signup;
