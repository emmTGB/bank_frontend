// src/components/AccountCard.jsx
import React from 'react';
import "./AccountCard.css"
import "mdui/components/card/index"
import "mdui/components/divider/index"
import "mdui/components/icon/index"
import {BankIcons} from "../Icons/BankIcons";
import {accountTypeDist, bankDist} from "../../utils/dists";

// AccountCard 组件用于展示单个账户的信息
const AccountCard = ({ delay, account, onCardClick }) => {


  return (
    <div className="acc-card-wrap" style={{ animationDelay: `${delay % 5 * 0.1}s` }}>
      <mdui-card id={`account-card-${account.id}`} variant={"elevated"} clickable onClick={() => onCardClick(account)}>
        <div className={"content-wrap"}>
          <div className={"above-content"}>
            <div className={"bank-info"}>
              <mdui-icon id={"bank-icon"}><BankIcons bank={account.bankName}/></mdui-icon>
              <div className={"bank-name"}>{bankDist[account.bankName]}</div>
            </div>
            <div className={"card-type"}>{accountTypeDist[account.accountType]}</div>
          </div>
          <div className="divider">
            <mdui-divider middle/>
          </div>
          <span className={"account-number"}>{account.accountNumber}</span>
        </div>
        <mdui-icon id={"bank-icon-bg"}><BankIcons bank={account.bankName}/></mdui-icon>
      </mdui-card>
    </div>
  );
};

export default AccountCard;
