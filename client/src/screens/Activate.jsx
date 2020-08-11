import React,{useState} from 'react';
import Button from  '../components/Button';
import Layout from '../components/Layout';
import CenterGrid from  '../components/CenterGrid';
import jwt from 'jsonwebtoken';
import Axios from 'axios';

const Activate=(props)=> {
    const [error,setError]=useState(null)
    const {token}=props.match.params
    const {name,email,password }=jwt.decode(token)
    function onActivate(){
        console.log(error)
        Axios.post(`http://localhost:8000/api/auth/activate`,{token })
            .then(res=>{
                console.log(res)
                const {status,message}=res.data;
                setError(message);
               if(status ===200){
                   console.log(status)
               return props.history.push('/login')
               }
            })
    }
    return (
        <Layout>
        <CenterGrid>
            <p>{name} are you ready to activate your acount</p>
            <Button title="Activate Your Acount"
            onClick={onActivate}
            />
            {error!=null?<p>{error}</p>:null}
        </CenterGrid>
        </Layout>
    )
}
export default Activate;
