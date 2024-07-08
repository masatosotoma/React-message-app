import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function SignIn() {
  function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return <Button onClick={singInWithGoogle}>Login with Google account</Button>;
}

export default SignIn;
