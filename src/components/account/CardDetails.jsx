import React, {useRef, useState} from 'react';
import {Masonry} from "@mui/lab";

import "mdui/components/card.js"
import "mdui/components/icon.js"
import "mdui/components/button.js"
import "mdui/components/chip.js"

import "@mdui/icons/edit"
import "./CardDetails.css"

import {BankIcons} from "../Icons/BankIcons";
import {Fade, Tooltip} from "@mui/material";
import {getAccountDetailsM} from "../../services/accountService";
import {accountStatusDist, accountTypeDist, bankDist} from "../../utils/dists";
import {useParams} from "react-router-dom";

export const CardDetails = ({details})=> {
  const [displayNumber, setDisplayNumber] = useState(details.accountNumber);
  const btnRef = useRef();

  console.log(details.balance)
  const availableBalance = (details.balance ? details.balance : 0).toFixed(2);

  const showFullNumber = async () => {
    try{
      const response = await getAccountDetailsM(details.id)
      setDisplayNumber(() => response.data.accountNumber.replace(/\s/g,'').replace(/(.{4})/g,"$1 "));
    }catch (error){
      console.log(error)
    }
  }

  return(
    <div className="detail-wrap">
      <mdui-icon>
        <BankIcons bank={details.bankName}/>
      </mdui-icon>
      <Tooltip title={"点击查看卡号"}
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
        <mdui-button ref={btnRef} onClick={showFullNumber} variant={"tonal"} full-width>
          {displayNumber}
        </mdui-button>

      </Tooltip>
      <Masonry className={"card-flow"} columns={2} spacing={1}>
        <mdui-card variant={"outlined"}>
          <span>账户余额</span>
          <span style={{overflowX:"auto"}} className={"balance"}>{availableBalance}</span>
        </mdui-card>
        <mdui-card variant={"filled"}>
          <mdui-chip elevated>{bankDist[details.bankName]}</mdui-chip>
          <mdui-chip elevated>{accountTypeDist[details.accountType]}</mdui-chip>
          <mdui-chip elevated>{accountStatusDist[details.status]}</mdui-chip>
          <mdui-chip elevated>{details.comment ? details.comment : '添加备注'}
            <mdui-icon-edit slot={"end-icon"}/>
          </mdui-chip>
        </mdui-card>
        <mdui-card clickable href={`/dashboard/${useParams().id}/transactions/${details.id}`} variant={"filled"} style={{backgroundColor: "rgb(var(--mdui-color-secondary-container))"}}>
          <span>明细查询</span>
        </mdui-card>
        {/*<mdui-card clickable variant={"elevated"} style={{ color: "rgb(var(--mdui-color-on-tertiary-container))", backgroundColor: "rgb(var(--mdui-color-tertiary-container))"}}>*/}
        {/*  <span>账户挂失</span>*/}
        {/*</mdui-card>*/}
        {/*<mdui-card clickable variant={"outlined"} style={{ color: "rgb(var(--mdui-color-on-error-container))", backgroundColor: "rgb(var(--mdui-color-error-container))"}}>*/}
        {/*  <span>删除账户</span>*/}
        {/*</mdui-card>*/}
      </Masonry>
    </div>
  )
}