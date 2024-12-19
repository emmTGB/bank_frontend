import "mdui/components/text-field.js"
import "mdui/components/button.js"
import "./UpdateForm.css"
import {getUser} from "../../services/userService"
import React, {useEffect, useRef} from 'react';
import {getUserId} from "../../services/authService";
import {useNavigate} from "react-router-dom";

const UpdateForm = ({ onupdate }) => {
  const passRef = useRef()
  const nPassRef = useRef()
  const fullRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const nameRef = useRef()

  const navigate = useNavigate();

  const handleBack = () => {
    if(window.history.length > 1){
      navigate(-1);
    }else{
      navigate('/');
    }
  }

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

    if(data.password === data.newPassword) {
      nPassRef.current.setCustomValidity("请输入新的密码")
    }

    if(data.newPassword.trim().length === 0) {
      data.newPassword = data.password
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
            if (passRef.current) {
              passRef.current.setCustomValidity("")
            }
          }}
          label="旧密码"
        />
        <mdui-text-field
          ref={nPassRef}
          name="newPassword"
          variant="outlined"
          type="password"
          toggle-password
          onFocus={() => {
            if (nPassRef.current) {
              nPassRef.current.setCustomValidity("")
            }
          }}
          label="新密码"
        />
        <mdui-button variant={'tonal'} onClick={handleBack} full-width>取消</mdui-button>
        <mdui-button full-width type="submit">更新</mdui-button>

      </form>

    </div>
  );
};

export default UpdateForm;
