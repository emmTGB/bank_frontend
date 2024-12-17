// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../components/user/RegisterForm';
import {getUserId, register} from '../services/authService';
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister = async (formData) => {
    try {
      const newUser = await register(formData);
      console.log('Registration successful:', newUser);
      // 在此可以设置注册成功后的逻辑
      const id = getUserId()
      navigate(`/dashboard/${id}`);
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <mdui-card
      style={{
        overflow: 'auto',
        maxHeight: '560px',
        maxWidth: '860px',
        boxSizing: 'border-box',
        padding: "var(--mdui-shape-corner-extra-large)",
        borderRadius: "var(--mdui-shape-corner-extra-large)",
        width: '80%',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--mdui-shape-corner-extra-large)',
      }}>
        <h2 style={{marginTop: "1.5rem", fontSize:"36px", lineHeight: "52px"}}>注册</h2>
        <RegisterForm onRegister={handleRegister}/>
      </mdui-card>
    </div>
  );
};

export default RegisterPage;
