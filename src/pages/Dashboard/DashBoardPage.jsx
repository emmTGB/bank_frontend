// src/pages/Dashboard.jsx
import React from 'react';
import {useNavigate, useParams} from "react-router-dom"; // 导入 AccountCard 组件
import "mdui/components/navigation-rail"
import 'mdui/components/navigation-rail-item.js';
import "mdui/components/fab.js"
import '@mdui/icons/edit.js'
import '@mdui/icons/credit-card.js'
import {NavigationRail} from "../../components/NavigationRail";
import CardDisplayPage from "./CardDisplayPage";
import {TransactionsListPage} from "./TransactionsListPage";
import {GreetingFullName} from "../../components/user/GreetingFullName";

// Dashboard 组件用于显示用户账户信息，并支持按页加载
const DashBoardPage = () => {
  const id = useParams().id;
  const page = useParams().page;

  const navigate = useNavigate();

  const renderPage = () => {
    switch (page) {
      case 'cards':
        return <CardDisplayPage/>
      case 'transactions':
        return <TransactionsListPage/>
      case 'undefined':
        navigate(`/dashboard/${id}/cards`)
        break
      default:
        return <div>404</div>
    }
  }

  return (
    <div className="dash-board"
      style={{
        display: 'flex', flexDirection: 'row',
      }}>
      <NavigationRail value= {page} />
      <div
        className="page-wrap"
        style={{
          width: '100%', height: '100vh',
          // overflowX: 'auto',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
        }}>
        <GreetingFullName/>
        {renderPage()}
      </div>

    </div>
  );
};

export default DashBoardPage;
