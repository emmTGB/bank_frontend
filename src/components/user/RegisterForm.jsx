import "mdui/components/text-field.js"
import "mdui/components/button.js"
import "./RegisterForm.css"
import React, {useRef, useState} from 'react';

const RegisterForm = ({ onRegister }) => {
  const passRef = useRef()
  const cPassRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      if (data.password !== data.confirmPassword) {
        cPassRef.current.setCustomValidity("请输入相同的密码")
      }
      onRegister(data);
    }catch (e){
      console.log(e)
    }
  };

  return (
    <div className="register-form-wrap">
      <form id={"register-412324"} className="register-form" onSubmit={handleSubmit}>
        <mdui-text-field
          name="username"
          variant="outlined"
          type="text"
          required
          label="用户名"
        />
        <mdui-text-field
          name="fullName"
          variant="outlined"
          type="text"
          required
          label="全名"
        />
        <mdui-text-field
          name="email"
          variant="outlined"
          type="email"
          required
          label="邮箱"
        />
        <mdui-text-field
          name="phone"
          variant="outlined"
          type="text"
          required
          label="手机号"
        />
        <mdui-text-field
          ref={passRef}
          name="password"
          variant="outlined"
          type="password"
          toggle-password
          required
          onFocus={() => {
            if(passRef.current) {passRef.current.setCustomValidity("")}
          }}
          label="密码"
        />
        <mdui-text-field
          ref={cPassRef}
          name="confirmPassword"
          variant="outlined"
          type="password"
          toggle-password
          required
          onFocus={() => {
            if(cPassRef.current) {cPassRef.current.setCustomValidity("")}
          }}
          label="确认密码"
        />
        <div/>
      </form>

      <mdui-button form={"register-412324"} full-width type="submit">注册</mdui-button>

    </div>
  );
};

export default RegisterForm;
