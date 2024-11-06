// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import { login } from '../services/authService';

const LoginPage = () => {
    const handleLogin = async (username, password) => {
        try {
            const user = await login(username, password);
            console.log('Login successful:', user);
            // 在此可以设置登录后的逻辑，例如存储 token 或重定向
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
