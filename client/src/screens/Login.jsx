import React ,{useState ,Component}from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import CenterGrid from "../components/CenterGrid";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
       email:'',
       password:''
    }
  }
 onChangeValue=(e)=>{
    this.setState({ [e.target.name]: e.target.value})
  }
  onSubmitForm=()=>{
    const{email,password}=this.state;

    axios.post("http://localhost:8000/api/auth/signin",{email,password})
        .then(res=>{
          const {user}=res.data;
          localStorage.setItem("_user",JSON.stringify(user))
        })
  }
 render(){
   const{email,password}=this.state;
  return (
    <Layout>
      <CenterGrid>
            <Card title="Login">
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
                    <Button title="Go!"
                    onClick={this.onSubmitForm}/>
            </Card>
      </CenterGrid>
    </Layout>
  );
 }

};
export default Login;
