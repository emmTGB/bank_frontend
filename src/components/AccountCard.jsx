// src/components/AccountCard.jsx
import React from 'react';

// AccountCard 组件用于展示单个账户的信息
const AccountCard = ({ account }) => {
  return (
    <div className="account-card">
      <h3>Account ID: {account.id}</h3>
      <p>Account Number: {account.accountNumber}</p>
    </div>
  );
};

export default AccountCard;
