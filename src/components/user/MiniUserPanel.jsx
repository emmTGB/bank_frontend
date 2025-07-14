import "mdui/components/card"
import "mdui/components/divider"
import "mdui/components/button-icon"
import "mdui/components/dropdown"
import "mdui/components/menu"

import "./MiniUserPanel.css"

import '@mdui/icons/exit-to-app.js';
import '@mdui/icons/edit.js';
import '@mdui/icons/palette.js';
import {getFullName, logout} from "../../services/userService";
import {useNavigate} from "react-router-dom";
import {clearUser} from "../../services/authService";
import {useEffect, useState} from "react";

export const MiniUserPanel = ({open}) => {
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();
  const handleLogout = () => {
    logout().then((r)=>{
    }).catch(err=>{

    }).finally(() => {
      clearUser()
      navigate("/auth/login")
    })
  }

  useEffect(() => {
    getFullName().then(n => setFullName(n))
  }, []);

  return (
    <div className={`user-panel-wrap ${open ? 'open' : 'close'}`}>
      <mdui-card>
        <mdui-button href={"/palette"} variant={"text"} >
          <div className="edit edit-palette">
            <mdui-icon-palette />
            <span>更改颜色</span>
          </div>
        </mdui-button>
        <mdui-button href={"/update"} variant={"text"}>
          <div className="edit edit-profile">
            <mdui-icon-edit/>
            <span>编辑资料</span>
          </div>
        </mdui-button>

        <mdui-divider middle style={{width: "100%"}}/>
        <div className="content-bottom">
          <mdui-button-icon style={{fontSize: '40px', visibility: "hidden"}}/>
          <span className={"full-name"}>{fullName}</span>
          <div style={{flexGrow: 1}}></div>
          <mdui-button-icon onClick={handleLogout} style={{fontSize: '26px'}}>
            <mdui-icon-exit-to-app/>
          </mdui-button-icon>
        </div>
      </mdui-card>
    </div>
  )
}