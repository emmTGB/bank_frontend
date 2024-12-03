import "mdui/components/fab/index"
import '@mdui/icons/keyboard-arrow-up.js';

import "./BackToTop.css"
import classNames from "classnames";
import {useEffect, useRef, useState} from "react";

export const BackToTop = ({className}) => {
  const [isOpen, setIsOpen] = useState(false);
  const fab = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsOpen(true); // 滚动超过160px，添加类
      } else {
        setIsOpen(false); // 回到顶部，移除类
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // 清除事件监听
    };
  }, []);

  return (
    <div className={classNames("back-to-top" , `${isOpen ? 'open' : ''}`, className)}>
      <mdui-fab ref={fab} id={"btt-fab"} onClick={() => { window.scrollTo(0, 0) }}>
        <mdui-icon-keyboard-arrow-up slot={"icon"} id={"fab-icon"}/>
      </mdui-fab>
    </div>
  )
}

