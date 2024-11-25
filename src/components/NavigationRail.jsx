import "mdui/components/navigation-rail"
import 'mdui/components/navigation-rail-item.js';
import "mdui/components/fab.js"
import '@mdui/icons/edit.js'
import '@mdui/icons/credit-card.js'
import './NavigationRail.css'
import React from "react";

export const NavigationRail = () => {
  return (
    <mdui-navigation-rail value="recent" contained>
      <mdui-fab slot={"top"}>
        <mdui-icon-edit slot="icon"/>
      </mdui-fab>
      <mdui-navigation-rail-item>
        <mdui-icon-credit-card slot="icon"/>
        银行卡
      </mdui-navigation-rail-item>
    </mdui-navigation-rail>
  )
}