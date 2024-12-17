// src/pages/Dashboard.jsx
import React, {useEffect, useState} from 'react';
import AccountCard from '../../components/account/AccountCard';
import {getAccountsByUserPage} from "../../services/userService";
import {useParams} from "react-router-dom"; // 导入 AccountCard 组件
import "mdui/components/navigation-rail"
import 'mdui/components/navigation-rail-item.js';
import "mdui/components/fab.js"
import 'mdui/components/circular-progress.js'
import '@mdui/icons/edit.js'
import '@mdui/icons/credit-card.js'

import {BackToTop} from "../../components/BackToTop";
import {CardDetailPanel} from "../../components/account/CardDetailPanel";

// Dashboard 组件用于显示用户账户信息，并支持按页加载
const CardDisplayPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true); // 用来标识是否还有更多页面
  const [loading, setLoading] = useState(false); // 加载状态
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [selected, setSelected] = useState(false);

  const { id } = useParams();

  // 触发获取账户数据的函数
  const loadAccounts = async () => {
    if (loading || !hasMore) return; // 如果正在加载或者没有更多数据就不执行

    setLoading(() => true);

    try {
      const response = await getAccountsByUserPage(id, page);
      const data = response.data;

      if (data && data.content && data.content.length > 0) {
        setAccounts(prevAccounts => [...prevAccounts, ...data.content]);
        setPage(page + 1);
        setHasMore(data.totalPages > data.currentPage + 1); // 如果总页数大于当前页数，说明还有更多页面
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error("Error loading accounts:", error);
      setHasMore(() => false)
    } finally {
      setLoading(() => false);
    }
  };

  // 监听滚动事件，加载下一页
  const handleScroll = () => {
    // const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
    const showHeight = window.innerHeight
    const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop
    const allHeight = document.body.scrollHeight
    const bottom = (showHeight + scrollHeight >= allHeight)
    if (bottom) {
      void loadAccounts(); // 滚动到底部时加载下一页
    }
  };

  const handleCardClick = (account) => {
    if (selectedAccountId !== account.id) {
      setSelectedAccountId(account.id)
      setSelected(true)
    } else {
      setSelected(!selected)
    }
  }

  const handleDetailClose = () => {
    setSelected(false)
    setTimeout(() => {
      if (!selected) {
        setSelectedAccountId(null);
      }
    }, 500)
  }

  // // 在组件挂载时加载初始数据
  useEffect(() => {
    if (page === 0) {
      void loadAccounts();
      setTimeout(() => {
        handleScroll();
      }, 600)
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }); // 只在组件首次渲染时调用一次 todo 不懂

  return (
    <div className="card-display"
      style={{
        paddingRight: '35vw',
        width: '100%',
        boxSizing: 'border-box',
      }}>
      <div className="card-list"
           style={{
             position: "relative",
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             width: '100%',
             paddingTop: 'var(--mdui-shape-corner-large)'
           }}>
        {accounts.length > 0 && (
          accounts.map((account, index) => (
            <AccountCard key={index} delay={index % 5} account={account} onCardClick={handleCardClick}/>
          ))
        )}
        {hasMore ?
          <>
            <span>Loading...</span>
            <br/>
            <mdui-circular-progress/>
            <br/>
          </>
          :
          <div>
            No more accounts...
          </div>
        }

      </div>
      <CardDetailPanel closure={handleDetailClose} extend={selected} accountId={selectedAccountId}/>
      <BackToTop/>
    </div>
  );
};

export default CardDisplayPage;
