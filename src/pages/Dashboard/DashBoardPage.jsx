// src/pages/Dashboard.jsx
import React from 'react';
import {Navigate, useLocation} from "react-router-dom"; // 导入 AccountCard 组件
import "mdui/components/navigation-rail"
import 'mdui/components/navigation-rail-item.js';
import "mdui/components/fab.js"
import '@mdui/icons/edit.js'
import '@mdui/icons/credit-card.js'
import {NavigationRail} from "../../components/NavigationRail";
import CardDisplayPage from "./CardDisplayPage";

// Dashboard 组件用于显示用户账户信息，并支持按页加载
const DashBoardPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderPage = () => {
    if (currentPath.endsWith("/cards")) {
      return <CardDisplayPage />
    } else {
      return <div>404</div>
    }
  }

  return (
    <div className="dash-board"
      style={{ display: 'flex', flexDirection: 'row', overflowY: 'auto' }}>
      <NavigationRail value={"cards"}/>
      <div className="page-wrap" style={{ marginTop: '120px', width: '100%' }}>
        {renderPage()}
      </div>

    </div>
  );
};

export default DashBoardPage;
