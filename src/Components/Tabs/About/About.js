import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import AboutContent from './AboutContent'
import ExecutiveBoard from './ExecutiveBoard'
import Constitution from './Constitution'
import SideBarMenu from '../../SidebarMenu'

export default class About extends SideBarMenu {

  tabMap = new Map([
    ['About', <AboutContent/>],
    ['Executive Board', <ExecutiveBoard/>],
    ['Constitution and Bylaws', <Constitution/>],
])

constructor(){
    super();
    this.setMap(this.tabMap);
}
  
  
}