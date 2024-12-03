import React, {useRef, useState} from 'react';
import {Masonry} from "@mui/lab";

import "mdui/components/card.js"
import "mdui/components/icon.js"
import "mdui/components/button.js"
import "mdui/components/chip.js"

import "@mdui/icons/edit"
import "./CardDetails.css"

import {BankIcons} from "./Icons/BankIcons";
import {Fade, Tooltip} from "@mui/material";
import {getAccountDetailsM} from "../services/accountService";

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
          <mdui-chip elevated>Ⅱ 类卡</mdui-chip>
          <mdui-chip elevated>{details.accountType}</mdui-chip>
          <mdui-chip elevated>{details.comment ? details.comment : '添加备注'}
            <mdui-icon-edit slot={"end-icon"}/>
          </mdui-chip>
        </mdui-card>
        <mdui-card variant={"outlined"}/>
        <mdui-card variant={"outlined"}/>
        <mdui-card variant={"outlined"}/>
      </Masonry>
    </div>
  )
}