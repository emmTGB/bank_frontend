import "mdui/components/navigation-rail"
import 'mdui/components/navigation-rail-item.js';
import "mdui/components/fab.js"
import 'mdui/components/button-icon.js';
import 'mdui/components/tooltip.js';

import '@mdui/icons/account-circle.js';
import '@mdui/icons/add.js'
import '@mdui/icons/credit-card.js'
import '@mdui/icons/add-card.js'
import '@mdui/icons/compare-arrows.js';
import '@mdui/icons/account-balance.js';
import '@mdui/icons/swap-horizontal-circle--outlined.js';

import './NavigationRail.css'
import React, {useEffect, useRef} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Fade, Tooltip} from "@mui/material";
import {MiniUserPanel} from "./user/MiniUserPanel";

export const NavigationRail = ({value}) => {
  const [openPanel, setOpenPanel] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [rotate, setRotate] = React.useState(0);
  const {id} = useParams();

  const rail = useRef(null)
  const navigate = useNavigate();

  const toggleButtons = () => {
    setIsOpen(!isOpen);
    setRotate(isOpen ? 0 : 45); // 旋转 45 度，点击复原为 0 度
  };

  const toggleUPanel = () => {
    setOpenPanel(!openPanel);
  }

  const handleNavigation = () =>{
    const toValue = rail.current.value;
    navigate(`/dashboard/${id}/${toValue}`, { replace: true });
  }

  useEffect(() => {
    handleNavigation()
  }, [])

  return (
    <>
      <mdui-navigation-rail
        value={value}
        contained
        ref={rail}
      >
        <mdui-fab id={"add-fab"} onClick={toggleButtons} slot={"top"}>
          <mdui-icon-add className={"fab-icon"} slot="icon"
                         style={{transform: `rotate(${rotate}deg)`, transition: 'transform 0.3s ease'}}/>
        </mdui-fab>
        <mdui-button-icon slot={"bottom"} onClick={toggleUPanel} style={{zIndex:5}} >
          <mdui-icon-account-circle style={{fontSize: '32px'}}/>
        </mdui-button-icon>

        <MiniUserPanel open={openPanel}/>
        <div onClick={toggleUPanel} className={`mask panel-mask ${openPanel ? 'open' : ''}`}/>

        <br/>
        <mdui-navigation-rail-item
          value={"cards"}
          href={`/dashboard/${id}/cards`}
        >
          <mdui-icon-credit-card slot="icon"/>
          银行卡
        </mdui-navigation-rail-item>
        <br/>
        <mdui-navigation-rail-item
          value={"transactions"}
          href={`/dashboard/${id}/transactions`}
        >
          <mdui-icon-swap-horizontal-circle--outlined slot="icon"/>
          交易记录
        </mdui-navigation-rail-item>
      </mdui-navigation-rail>
      <div className={`add-buttons ${isOpen ? 'open' : ''}`}>
        <Tooltip title={"注册银行卡"}
                 disableFocusListener
                 slots={{
                   transition: Fade,
                 }}
                 slotProps={{
                   transition: { timeout: 600 },
                   popper: {
                     modifiers: [
                       {
                         name: 'offset',
                         options: {
                           offset: [0, -8],
                         },
                       },
                     ],
                   },
                 }}
        >
          <mdui-button-icon className={'add-button add-card'} href={"/account/create"} variant="filled">
            <mdui-icon-add-card/>
          </mdui-button-icon>
        </Tooltip>
        <Tooltip title={"发起交易"}
                 disableFocusListener
                 slots={{
                   transition: Fade,
                 }}
                 slotProps={{
                   transition: {timeout: 600},
                   popper: {
                     modifiers: [
                       {
                         name: 'offset',
                         options: {
                           offset: [0, -8],
                         },
                       },
                     ],
                   },
                 }}
          >
            <mdui-button-icon className={'add-button do-transaction'} href={"/transaction"} variant="filled">
              <mdui-icon-compare-arrows/>
            </mdui-button-icon>
          </Tooltip>
          {/*<mdui-button-icon className={'add-button'} variant="filled"><mdui-icon-account-balance/> </mdui-button-icon>*/}
        </div>
        <div className={`mask add-mask ${isOpen ? 'open' : ''}`} onClick={toggleButtons}></div>
      </>
      )
      }