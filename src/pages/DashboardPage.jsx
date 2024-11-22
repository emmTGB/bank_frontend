// src/pages/Dashboard.jsx
import React, {useEffect, useState} from 'react';
import AccountCard from '../components/AccountCard';
import {getAccountsByUserPage} from "../services/userService";
import {useParams} from "react-router-dom"; // 导入 AccountCard 组件

// Dashboard 组件用于显示用户账户信息，并支持按页加载
const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true); // 用来标识是否还有更多页面
  const [loading, setLoading] = useState(false); // 加载状态

  const { id } = useParams();

  // 触发获取账户数据的函数
  const loadAccounts = async () => {
    if (loading || !hasMore) return; // 如果正在加载或者没有更多数据就不执行

    setLoading(true);

    try {
      const response = await getAccountsByUserPage(id, page);
      const data = response.data;

      if (data && data.content && data.content.length > 0) {
        setAccounts(prevAccounts => [...prevAccounts, ...data.content]);
        setPage(page + 1);
        setHasMore(data.totalPages > data.currentPage + 1); // 如果总页数大于当前页数，说明还有更多页面
      }else{
        setHasMore(false)
      }
    } catch (error) {
      console.error("Error loading accounts:", error);
    } finally {
      setLoading(false);
      setHasMore(false)
    }
  };

  // 监听滚动事件，加载下一页
  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
    if (bottom) {
      void loadAccounts(); // 滚动到底部时加载下一页
    }
  };

  // // 在组件挂载时加载初始数据
  useEffect(() => {
    void loadAccounts();
  }); // 只在组件首次渲染时调用一次 todo 不懂

  return (
    <div className="dashboard" onScroll={handleScroll} style={{ height: '80vh', overflowY: 'auto' }}>
      <h2>User Dashboard</h2>
      {accounts.length > 0 ? (
        accounts.map((account, index) => (
          <AccountCard key={index} account={account} />
        ))
      ) : (
        <p>Loading accounts...</p>
      )}
      {loading && <p>Loading more...</p>}
      {!hasMore && <p>No more accounts to load.</p>}
    </div>
  );
};

export default Dashboard;
