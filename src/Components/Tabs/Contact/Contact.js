import React from 'react'
import SideBarMenu from '../../SidebarMenu'
import PartnerWithPratt from './PartnerWithPratt'


export default class Contact extends SideBarMenu {

  tabMap = new Map([
    ['Partner with Pratt', <PartnerWithPratt/>]
])

constructor(){
    super();
    this.setMap(this.tabMap);
}
  
}