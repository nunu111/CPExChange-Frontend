import React, { useState } from "react";

export function Login() {
  const [Login, setLogin] = useState(false);

  function nowLogin () {
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
