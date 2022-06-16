import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../backend/firebasehandler";
import './SignUPStyles.css';

const SignUPPage =()=>{
     
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
                await createUserWithEmailAndPassword(firebaseAuth,userInput.emailid,userInput.password)
                alert("Account Created");
                nav("/login");
            }
           catch(err){
               alert(err);
           }
           setLoading(false);
        }
    return(
        <div className="login-page-container">
            <div className="login-form-elements">
                <div className="login-elements">
                <h1>welcome </h1>
                <p>welcome ! please enter your details to create account</p>
                <TextField onChange={handleChange} name="emailid" value={userInput.emailid} sx={{marginTop:'15px'}} id="outlined-basic" label="Email ID" variant="outlined" />
                <TextField onChange={handleChange} name="password" type={'password'} value={userInput.password} sx={{marginTop:'15px'}} id="outlined-basic" label="Password" variant="outlined" />
                <Button disabled={loading} onClick={handleClick} sx={{marginTop:'20px'}} variant="contained">Sign In</Button>
                <div className="signup-div">Already have an account?<Button variant="containrd"onClick={() => nav("/login")}>Login</Button></div>
            </div>
            </div>

        </div>
    
   
    )
}

export default SignUPPage;