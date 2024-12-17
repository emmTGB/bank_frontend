import "mdui/components/text-field.js"
import "mdui/components/button.js"
import "./UpdateForm.css"
import {getUser} from "../../services/userService"
import React, {useEffect, useRef, useState} from 'react';
import {getUserId} from "../../services/authService";

const UpdateForm = ({ onupdate }) => {
  const passRef = useRef()
  const nPassRef = useRef()
  const fullRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const nameRef = useRef()


  useEffect(() =>{
    getUser(getUserId()).then((r) => {
      const userInfo = r.data

      nameRef.current.value = userInfo.username
      fullRef.current.value = userInfo.fullName
      emailRef.current.value = userInfo.email
      phoneRef.current.value = userInfo.phone}
    ).catch((err) => {
      console.log(err)})
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if(data.password === data.confirmPassword) {
      nPassRef.current.setCustomValidity("请输入新的密码")
    }

    onupdate(data);
  };

  return (
    <div className="update-form-wrap">
      <form id={"update-412324"} className="update-form" onSubmit={handleSubmit}>
        <mdui-text-field
          ref={nameRef}
          variant="outlined"
          type="text"
          readonly
          label="用户名"
        />
        <mdui-text-field
          ref={fullRef}
          name="fullName"
          variant="outlined"
          type="text"
          required
          label="全名"
        />
        <mdui-text-field
          ref={emailRef}
          name="email"
          variant="outlined"
          type="email"
          required
          label="邮箱"
        />
        <mdui-text-field
          ref={phoneRef}
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
          label="旧密码"
        />
        <mdui-text-field
          ref={nPassRef}
          name="confirmPassword"
          variant="outlined"
          type="password"
          toggle-password
          required
          onFocus={() => {
            if(nPassRef.current) {nPassRef.current.setCustomValidity("")}
          }}
          label="新密码"
        />
        <div/>
      </form>

      <mdui-button form={"update-412324"} full-width type="submit">更新</mdui-button>

    </div>
  );
};

export default UpdateForm;
