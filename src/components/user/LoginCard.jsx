// src/components/LoginForm.jsx
import React, {useRef} from 'react';
import "mdui/components/text-field/index.js"
import "mdui/components/button/index.js"
import "mdui/components/card/index.js"
import "mdui/components/icon.js"
import "./LoginCard.css"
import {useNavigate} from "react-router-dom";
import {WalletSymbol} from "../svg/WalletSymbol";

const LoginCard = ({ onLogin }) => {
  const navigate = useNavigate();
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const btnRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      btnRef.current.loading = true;
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      await onLogin(username, password);
    } catch (error) {
      console.log(error)
      switch (error.status) {
        case 401:
          passwordRef.current.setCustomValidity("用户名或密码错误")
          break;
        default:
          alert("未知错误")
          break;
      }
      console.error('Login failed:', error.message);
    }finally {
      btnRef.current.loading = false;
    }
  };

  const clearValidity = () => {
    passwordRef.current.setCustomValidity("")
  }

  const jumpToRegister = (e) => {
    e.preventDefault();
    navigate("/auth/register");
  }

  return (
    <mdui-card id="login-card" style={{ overflowY: "auto" }}>
      <mdui-icon>
        <WalletSymbol />
      </mdui-icon>
      <div className="login-wrap">
        <div className="login-guide horizontal">
          <div className="login-text">
            登录
          </div>
        </div>
        <form onSubmit={handleSubmit} className="login-form horizontal">
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
            onFocus={clearValidity}
            required
          />
          <div style={{ flexGrow: '1', minHeight: '2rem' }} />
          <div className="login-buttons">
            <mdui-button variant="text" onClick={jumpToRegister}>注册账户</mdui-button>
            <mdui-button ref={btnRef} type="submit">登录</mdui-button>
          </div>
        </form>
      </div>
    </mdui-card>
  );
};

export default LoginCard;
