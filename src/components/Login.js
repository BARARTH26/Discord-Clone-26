import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth,provider} from "../firebase/firebase";


function Login() {

    const signIn = ()=> {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <h1>Please Click Here to Login</h1>
            <Button onClick={signIn} >SignIn</Button>
        </div>
    )
}

export default Login
