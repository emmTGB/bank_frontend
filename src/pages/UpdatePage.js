// src/pages/UpdatePage.jsx
import React from 'react';
import UpdateForm from '../components/user/UpdateForm';
import {getUserId, update} from '../services/authService';
import {useNavigate} from "react-router-dom";

const UpdatePage = () => {
  const navigate = useNavigate();
  const handleUpdate = async (formData) => {
    try {
      const newUser = await update(formData);
      console.log('Update successful:', newUser);
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
        <h2 style={{marginTop: "1.5rem", fontSize:"36px", lineHeight: "52px"}}>更新信息</h2>
        <UpdateForm onUpdate={handleUpdate}/>
      </mdui-card>
    </div>
  );
};

export default UpdatePage;
