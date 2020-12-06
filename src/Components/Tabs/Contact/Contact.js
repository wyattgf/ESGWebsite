import React from 'react'
import { Segment} from 'semantic-ui-react'
import SideBarMenu from '../../SidebarMenu'
import ContactContent from './ContactContent'
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