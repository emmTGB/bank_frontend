// src/components/LoginForm.jsx
import React, {useRef} from 'react';
import "mdui/components/text-field/index.js"
import "mdui/components/button/index.js"
import "mdui/components/card/index.js"
import "mdui/components/icon.js"
import "./LoginCard.css"
import {useNavigate} from "react-router-dom";
import {WalletSymbol} from "./svg/WalletSymbol";

const LoginCard = ({ onLogin }) => {
  const navigate = useNavigate();
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      await onLogin(username, password);
    } catch (error) {
      console.error('Login failed:', error.message);
      usernameRef.current.setCustomValidity("1111")
    }
  };

  const jumpToRegister = (e) => {
    e.preventDefault();
    navigate("/auth/register");
  }

  return (
    <mdui-card id="login-card" title="Login">
      <mdui-icon>
        <WalletSymbol/>
      </mdui-icon>
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
          <br />
          <br />
          <mdui-text-field
            type="password"
            toggle-password
            variant="outlined"
            label="密码"
            ref={passwordRef}
            required
          />
          <br />
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
