// src/pages/UpdatePage.jsx
import React, {useEffect, useRef, useState} from 'react';
import UpdateForm from '../../components/user/UpdateForm';
import {getUserId} from '../../services/authService';
import {useNavigate} from "react-router-dom";
import {update} from "../../services/userService";

const UpdatePage = () => {
  const [message, setMessage] = useState('');
  const snackRef = useRef(null);
  const navigate = useNavigate();


  const handleUpdate = (formData) => {
    update(formData).then((u) => {
      console.log('Update successful:', u);
      // 在此可以设置注册成功后的逻辑
      const id = getUserId()
      navigate(`/dashboard/${id}`)
    }).catch((error) => {
      console.error('Update failed:', error.message)
      setMessage(error.data);
      snackRef.current.open = true;
    })
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
          maxHeight: '90vh',
          maxWidth: '860px',
          boxSizing: 'border-box',
          padding: "var(--mdui-shape-corner-extra-large)",
          backgroundColor: "rgb(var(--mdui-color-surface-container-lowest))",
          borderRadius: "var(--mdui-shape-corner-extra-large)",
          width: '80%',
          height: 'min-content',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--mdui-shape-corner-extra-large)',
        }}>
        <h2 style={{marginTop: "1.5rem", fontSize: "36px", lineHeight: "52px"}}>更新信息</h2>
        <UpdateForm onupdate={handleUpdate}/>
      </mdui-card>
      <mdui-snackbar
        style={{
          height: '42px',
          fontSize: "16px",
          userSelect: "none",
          backgroundColor: "rgb(var(--mdui-color-error))",
          color: "rgb(var(--mdui-color-on-error))",
        }}
        ref={snackRef}
        auto-close-delay="2000"
      >
        {message}
      </mdui-snackbar>
    </div>
  );
};

export default UpdatePage;
