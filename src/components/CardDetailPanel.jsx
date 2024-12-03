import "mdui/components/divider/index"
import "mdui/components/card"
import "mdui/components/button-icon/index"
import 'mdui/components/circular-progress/index'

import '@mdui/icons/inbox.js';
import '@mdui/icons/arrow-right.js';

import './CardDetailPanel.css'
import {CardDetails} from "./CardDetails";
import {useEffect, useState} from "react";
import {getAccountDetails} from "../services/accountService";

export const CardDetailPanel = ({ closure, extend, accountId }) => {
  const [loading, setLoading] = useState(null);
  const [details, setDetails] = useState({});

  const handleBackClick = (e) => {
    e.preventDefault();
    closure()
  }

  useEffect(() => {
    const fetchDetails = async () => {
      if (accountId) {
        try {
          setLoading(true);
          const response = await getAccountDetails(accountId);
          setDetails(() => response.data);
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false);
        }
      } else {
        setDetails(null)
        setLoading(extend)
      }
    }
    fetchDetails()
  }, [accountId, extend])


  return (
    <div className="card-detail-panel-wrap">
      <div className={"background"}>
        <mdui-divider vertical />
        <mdui-icon-inbox id={"bg-icon"} />
        <br />
        <span>
          选择一张卡以查看
        </span>
      </div>
      <div className={`card-detail-panel ${extend ? "extend" : ""}`}>
        <mdui-button-icon onClick={handleBackClick}>
          <mdui-icon-arrow-right />
        </mdui-button-icon>
        <div className={"content-wrap"}>
          {loading ? (
            <mdui-circular-progress /> // 如果正在加载，显示加载圆形进度条
          ) : (
            details === null ? <div /> : <CardDetails details={details} />
          )}
        </div>

      </div>
    </div>
  )
}