import "mdui/components/card"
import "mdui/components/divider"
import "mdui/components/button-icon"
import "mdui/components/dropdown"
import "mdui/components/menu"

import "./MiniUserPanel.css"

import '@mdui/icons/exit-to-app.js';
import '@mdui/icons/edit.js';
import '@mdui/icons/palette.js';
import {getFullName} from "../../services/userService";

export const MiniUserPanel = ({open}) => {

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
          <span className={"full-name"}>{getFullName()}</span>
          <div style={{flexGrow: 1}}></div>
          <mdui-button-icon style={{fontSize: '26px'}}>
            <mdui-icon-exit-to-app/>
          </mdui-button-icon>
        </div>
      </mdui-card>
    </div>
  )
}