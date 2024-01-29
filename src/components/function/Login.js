import React, { useState } from "react";

export function Login() {
  const [Login, setLogin] = useState(false);

  function nowLogin () {
    setLogin(true);
    console.log("now" + Login);
  };

  const isLogin = () => {
    console.log("check:" + Login);
    return Login
  };

  function logout () {
    setLogin(false);
    console.log("now" + Login);
  };
  return {
    nowLogin,
    isLogin,
    logout
  }
}
