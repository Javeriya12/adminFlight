import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import './LoginStyles.css';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../backend/firebasehandler";

const LoginPage =()=>{

     
    const [loading,setLoading]=useState(false);   
    const [userInput,setuserInput]=useState({
        emailid:"",
        password:""
    });

    const nav = useNavigate();

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setuserInput({
            ...userInput,
            [name]:value
        })

    }

    const handleClick=async()=>{
        try{
            setLoading(true)
            await signInWithEmailAndPassword(firebaseAuth,userInput.emailid,userInput.password)
            alert("You have succesfully logged in");
            nav("/Home");
        }
       catch(err){
           alert(err);
       }
       setLoading(false);
    }
   
    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,(user)=>{
            if(!user){
                nav('/sign');
            }
   
   
        })
       },[]);

    return(
        <div className="login-page-container">
             <div className="login-form-elements">
                <div className="login-elements">
                    <h1>welcom back</h1>
                    <p>welcome back! please enter your details</p>
                    <TextField onChange={handleChange} name="emailid" value={userInput.emailid} sx={{marginTop:'15px'}} id="outlined-basic" label="Email Id" variant="outlined" />
                    <TextField onChange={handleChange} name="password" value={userInput.password} type={'password'} sx={{marginTop:'15px'}} id="outlined-basic" label="Password" variant="outlined" />
                    <Button onClick={handleClick} sx={{marginTop:'20px'}} variant="contained">Sign In</Button>
                     <div className="signup-div">Dont have account?<Button variant="containrd"onClick={() => nav("/")}>Signup</Button></div>
                </div>
            

            </div>
        
        </div>
    )
}

export default LoginPage;