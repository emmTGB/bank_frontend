// src/pages/LoginPage.jsx
import React from 'react';
import LoginCard from '../components/user/LoginCard';
import {getUserId, login} from '../services/authService';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (username, password) => {
        try {
            const response = await login(username, password);
            console.log('Login successful:', response.data);
            const id = getUserId()
            navigate(`/dashboard/${id}`);
            // 在此可以设置登录后的逻辑，例如存储 token 或重定向
        } catch (error) {
            if (error.status === 401) {
                console.error('Login failed:', error.message)
            } else {
                console.error('Internal Error:', error.message)
            }
            throw error;
        }
    };

    return (
        <div style={{
            backgroundColor: 'rgb(var(--mdui-color-surface-container))', height: '100vh',
            overflow: 'auto',
            display: 'flex', justifyContent: 'space-around', justifyItems: 'center',
        }}>
            <LoginCard onLogin={handleLogin} style={{height:'1000px'}} />
        </div>
    );
};

export default LoginPage;
