import React, { useState } from "react";

export function SigninFunc() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");

  function SigninState1(email, password, displayname) {
    setEmail(email);
    setPassword(password);
    setDisplayname(displayname);
    return true;
  }

  return {
    SigninState1,
  };
}
