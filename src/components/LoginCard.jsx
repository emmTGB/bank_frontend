// src/components/LoginForm.jsx
import React, {useRef} from 'react';
import "mdui/components/text-field/index.js"
import "mdui/components/button/index.js"
import "mdui/components/card/index.js"
import "./LoginCard.css"
import {useNavigate} from "react-router-dom";

const LoginCard = ({ onLogin }) => {
  const navigate = useNavigate();
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      await onLogin(username, password);
    }catch (error){
      console.error('Login failed:', error.message);
      usernameRef.current.setCustomValidity("1111")
    }
  };

  const jumpToRegister = (e) => {
    e.preventDefault();
    navigate("/auth/register");
  }

  return (
    <mdui-card title="Login">
      <svg className="g-logo" xmlns="https://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 40 48"
           aria-hidden="true">
        <path fill="#4285F4"
              d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path>
        <path fill="#34A853"
              d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path>
        <path fill="#FABB05"
              d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path>
        <path fill="#E94235"
              d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path>
      </svg>
      {/*<form onSubmit={handleSubmit}>*/}
        <div className="login-wrap">
          <div className="login-guide horizontal">
            <div className="login-text">
              登录
            </div>
          </div>
          <div className="login-form horizontal">
            <mdui-text-field
              variant="outlined"
              label="用户名"
              ref={usernameRef}
              autoFocus={true}
              required
            />
            <br/>
            <br/>
            <mdui-text-field
              type="password"
              toggle-password
              variant="outlined"
              label="密码"
              ref={passwordRef}
              required
            />
            <br/>
          </div>
        </div>
        <div className="login-buttons">
          <mdui-button variant="text" onClick={jumpToRegister}>注册账户</mdui-button>
          <mdui-button onClick={handleSubmit} type="submit">登录</mdui-button>
        </div>
      {/*</form>*/}
    </mdui-card>
  );
};

export default LoginCard;
