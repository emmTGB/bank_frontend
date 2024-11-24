// src/components/LoginForm.jsx
import React, {useEffect, useRef} from 'react';
import "mdui/components/text-field/index.js"
import "mdui/components/button/index.js"
import "mdui/components/card/index.js"
import "./LoginCard.css"

const LoginCard = ({ onLogin }) => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      onLogin(username, password);
    }catch (error){
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <mdui-text-field
        variant="outlined"
        label="username"
        ref={usernameRef}
        autofocus={true}
        required
      />
      <br/>
      <mdui-text-field
        type="password"
        toggle-password
        variant="outlined"
        label="password"
        ref={passwordRef}
        required
      />
      <br/>
      <mdui-button type="submit">登录</mdui-button>
    </form>
  );
};

export default LoginCard;
