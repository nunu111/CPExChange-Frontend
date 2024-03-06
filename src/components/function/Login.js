import React, { useState } from "react";
import axios from 'axios';  

export function Login() {
  const [Login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function nowLogin (Name) {
    setUsername(Name);
    setLogin(true);
  };

  const isLogin = () => {
    return Login
  };
  const getName =()=>{
    return username
  }

  function logout () {
    localStorage.setItem('token', '');
    setLogin(false);
  };
  return {
    nowLogin,
    isLogin,
    logout,getName
  }
}
