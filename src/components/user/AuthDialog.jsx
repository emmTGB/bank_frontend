import "mdui/components/button.js"
import "mdui/components/dialog.js"
import "mdui/components/text-field.js"
import {useEffect, useRef} from "react";
import {getUserId} from "../../services/authService";


export const AuthDialog = ({entranceRef, onSubmit}) => {
  const dialog = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()

  const handleConfirm = () => {
    const password = passwordRef.current.value
    if(password === "") {
      passwordRef.current.setCustomValidity("请输入密码")
    }
    const authBody = {
      id: getUserId(),
      password: password,
    }
    try{
      console.log(authBody)
      onSubmit(authBody)
      dialog.current.open = false
    }catch (error){
      if(error.status === 401){
        passwordRef.current.setCustomValidity("密码错误")
      }else{
        dialog.current.open = false
      }
    }

  }

  useEffect(()=>{
    entranceRef.current.addEventListener("click", ()=>{
      dialog.current.open = true
      entranceRef.current.loading = true
    })
    dialog.current.addEventListener("closed", ()=>{
      entranceRef.current.loading = false
      passwordRef.current.setCustomValidity("")
    })
  }, [entranceRef])
  return (
    <>
      <mdui-dialog
        close-on-esc
        close-on-overlay-click id={"user-auth-dialog"} ref={dialog}>
        <mdui-text-field onFocus={() => {passwordRef.current.setCustomValidity("")}} ref={passwordRef} label={"输入密码"} toggle-password type={"password"}></mdui-text-field>
        <mdui-button slot={"action"} variant={"text"} onClick={()=>{dialog.current.open = false}}>关闭</mdui-button>
        <mdui-button style={{marginLeft:"8px"}} ref={confirmRef} slot={"action"} variant={"tonal"} onClick={handleConfirm}>确认</mdui-button>
      </mdui-dialog>
    </>
  )
}