import React, { useState } from "react";
import axios from 'axios';  

export function Login() {
  const [Login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const LoginAPI = async()=>{
    // try{
    //   const response = await axios.get('/guests/login', {
    //     username: username,
    //     password: password
    //   });
    //   if(response.data.ok === 200){
    //     setLogin(true);
    //   }
    // }catch(e){
    //   alert(e.response.data.message);
    // }
  }
  function nowLogin () {
    LoginAPI();
    setLogin(true);
  };

  const isLogin = () => {
    return Login
  };

  function logout () {
    setLogin(false);
  };
  return {
    nowLogin,
    isLogin,
    logout
  }
}
