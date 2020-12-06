import React from 'react'
import { Segment} from 'semantic-ui-react'
import SideBarMenu from '../../SidebarMenu'
import ContactContent from './ContactContent'


export default class Contact extends SideBarMenu {

  tabMap = new Map([
    ['Contact', <Segment><ContactContent/></Segment>]
])

constructor(){
    super();
    this.setMap(this.tabMap);
}
  
}