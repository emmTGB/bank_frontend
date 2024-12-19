import React, {useRef} from 'react';
import "mdui/components/select.js"
import "mdui/components/button.js"
import "mdui/components/text-field.js"
import "mdui/components/menu-item.js"
import "mdui/components/snackbar.js"
import "mdui/components/icon.js"

import "@mdui/icons/done.js"
import "./CreateAccountForm.css"


const CreateAccountForm = ({ onSubmit }) => {
  const userId = localStorage.getItem('id');
  const btnRef = useRef()
  const snackRef = useRef()
  const passRef = useRef()

  const setLoading = (ld) => {
    btnRef.current.loading = ld
  }

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 封装请求体
    const requestBody = {
      userId: parseInt(userId),
      accountType: data.accountType,
      bankName: data.bankName,
      authRequest: {
        id: parseInt(userId),
        password: data.password,
      },
    };

    setLoading(true)

    // 调用父组件传递的 onSubmit 方法
    try{
      onSubmit(requestBody);
      snackRef.current.open = true;
    }catch (error){
      if(error.status === 401){
        passRef.current.setCustomValidity("密码错误")
      }
    }finally {
      setLoading(false)
    }
  };

  return (
    <div className="create-account-form">
      <form className={"create-form"} onSubmit={handleSubmit}>
        <mdui-select
          name={"accountType"}
          variant={"outlined"}
          required
          label={"账户类型"}
        >
          <mdui-menu-item value="CHECKING">支票卡</mdui-menu-item>
          <mdui-menu-item value="SAVINGS">储蓄卡</mdui-menu-item>
          <mdui-menu-item value="LOAN">贷款卡</mdui-menu-item>
        </mdui-select>

        <mdui-select
          name={"bankName"}
          variant={"outlined"}
          required={true}
          label={"银行"}
        >
          <mdui-menu-item value="BOC">中国银行</mdui-menu-item>
          <mdui-menu-item value="ABC">农业银行</mdui-menu-item>
          <mdui-menu-item value="CCB">建设银行</mdui-menu-item>
          <mdui-menu-item value="ICBC">工商银行</mdui-menu-item>
        </mdui-select>


        <mdui-text-field ref={passRef} onFocus={()=>{passRef.current.setCustomValidity("")}} name={"password"} variant={"outlined"} type={"password"} required label={"密码"}/>
        <div style={{flexGrow: '1', minHeight: '1.5rem'}}/>
        <div>
          <mdui-button ref={btnRef} type={"submit"}>
            注册
          </mdui-button>
        </div>
      </form>

      <mdui-snackbar ref={snackRef} style={{backgroundColor: "rgb(var(--mdui-color-primary))"}}>
        注册成功
      </mdui-snackbar>
    </div>
  );
};

export default CreateAccountForm;
