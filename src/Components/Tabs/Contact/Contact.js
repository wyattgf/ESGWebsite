import React, { Component } from 'react'
import { Grid, Menu , Segment} from 'semantic-ui-react'
import SideBarMenu from '../../SidebarMenu'
import ContactContent from './ContactContent'


export default class Contact extends SideBarMenu {

  tabMap = new Map([
    ['Content', <Segment><ContactContent/></Segment>]
])

constructor(){
    super();
    this.setMap(this.tabMap);
}
  
}