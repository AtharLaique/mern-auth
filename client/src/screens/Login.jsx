import React ,{useState}from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import CenterGrid from "../components/CenterGrid";

const Login = () => {
  const [values,setValues]=useState({email:'',password:''})
  const onChangeValue=(e)=>{
   setValues({[e.target.name]:e.target.value})
  }
 const  onSubmitForm = () => {
    console.log(values);
  };
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
                value={values.email}
                onChangeValue={onChangeValue}
                />
                 <Input 
                label="Password"
                placeholder="Enter Your Password ..."
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChangeValue={onChangeValue}
                />
                    <Button title="Go!"
                    onClick={onSubmitForm}/>
            </Card>
      </CenterGrid>
    </Layout>
  );
};
export default Login;
