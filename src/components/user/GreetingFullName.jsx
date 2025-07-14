import {useEffect, useState} from "react";
import {getFullName, getUser} from "../../services/userService";
import {useParams} from "react-router-dom";
import {getUserId} from "../../services/authService";

import "./GreetingFullName.css"

export const GreetingFullName = (props) => {
  const getGreeting = () => {
    const currentHour = new Date().getHours(); // 获取当前小时数（0 - 23）

    if (currentHour < 12) {
      return "早上好！";
    } else if (currentHour < 14) {
      return "中午好！";
    } else if (currentHour < 18) {
      return "下午好！";
    } else {
      return "晚上好！";
    }
  };

  const [greeting, setGreeting] = useState("");
  const [fullName, setFullName] = useState("");

  const {id} = useParams();
  const userId = getUserId()

  useEffect(() => {
    if(id && id !== userId) {
      getUser(id).then((r) => {
        setFullName(r.data.fullName)
      }).catch((err) => {
        console.log(err)
      })
    }else{
      getFullName().then(n => setFullName(n))
    }
    setGreeting(getGreeting);
  }, []);

  return (
    <div className={"greeting-wrap " + props.className}>
      <span className={"content greeting"}>{greeting}</span>
      <span className={"content full-name"}>{fullName}</span>
    </div>
  )
}