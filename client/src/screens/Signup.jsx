import React, { Component } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import CenterGrid from "../components/CenterGrid";
import Alert from "../components/Alert";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: false,
      message: "",
      type: "",
    };
  }
  onChangeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitForm = () => {
    this.setState({error:false})
    const { name, email, password } = this.state;
    axios({
      method: "post",
      url: `http://localhost:8000/api/auth/signup`,
      data: { name, email, password },
    })
      .then((responce) => {
        let res = responce.data;
        res.status==200?this.setState({
          name:null,
          email:null,
          password:null,
          message: res.message,
          type:  "success" ,
          error:true
        }):this.setState({
          message: res.message,
          type: "danger",
          error:true
        })
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    let { name, email, password, error, message, type } = this.state;
    return (
      <Layout>
        <CenterGrid>
          {error ? <Alert message={message} type={type} /> : null}
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
            <Button title="Create Your Acount !" onClick={this.onSubmitForm} />
          </Card>
        </CenterGrid>
      </Layout>
    );
  }
}

export default Signup;
