import "mdui/components/card.js"
import "mdui/components/icon.js"
import {CreateAccountSymbol} from "../svg/CreateAccountSymbol";
import React from "react";
import CreateAccountForm from "./CreateAccountForm";
import {createAccount} from "../../services/accountService";
import {NavBackButton} from "../NavBackButton";
import "./CreateAccountCard.css"


export const CreateAccountCard = () => {
  const handleAccountCreation = (requestBody) => {
    try {
      const response = createAccount(requestBody)
      console.log('Account created:', response.data);
      // 可以在这里根据需求做其他操作，例如跳转到其他页面，显示成功消息等
    } catch (err) {
      switch (err.status) {
        case 401:
          throw err;
        case 500:
          alert("服务器错误")
          break;
        default:
          alert("未知错误，请联系网站管理员")
      }
      console.error('Error creating account:', err);
    }
  };
  return (
    <div className={"create-account-wrap"}>
      <mdui-card variant={"elevated"} style={{ backgroundColor: "rgb(var(--mdui-color-inverse-on-surface))" }}>
        <div className="top-content">
          <mdui-icon style={{ fontSize: "5rem" }}>
            <CreateAccountSymbol />
          </mdui-icon>
        </div>
        <div className="sub-content">
          <span className="title">注册银行卡</span>
          <div style={{
            flexGrow: '1', minWidth: '2rem'
          }} />
          <CreateAccountForm onSubmit={handleAccountCreation} />
        </div>
        <NavBackButton className={"back-button"} size={32} />
      </mdui-card >
    </div >
  )
}