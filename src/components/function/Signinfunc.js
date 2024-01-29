import React, { useState } from 'react'

export function SigninFunc() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function SigninState1 (email, password) {
      setEmail(email);
      setPassword(password);
      return true
    }

  return {
    SigninState1
  }
}
