// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import {register} from '../services/authService';

const RegisterPage = () => {
    const handleRegister = async (formData) => {
        try {
            const newUser = await register(formData);
            console.log('Registration successful:', newUser);
            // 在此可以设置注册成功后的逻辑
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <RegisterForm onRegister={handleRegister} />
        </div>
    );
};

export default RegisterPage;
