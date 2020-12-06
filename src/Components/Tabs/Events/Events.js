import React, { Component } from 'react'
import {Segment } from 'semantic-ui-react'
import ESocials from './ESocials'
import EPicnics from './EPicnics'
import ESocialSponsorship from './ESocialSponsorship'
import EBall from './EBall'
import SideBarMenu from '../../SidebarMenu'

export default class Events extends SideBarMenu {

  tabMap = new Map([
    ['E-Socials', <Segment><ESocials/></Segment>],
    ['E-Social Sponsorship', <Segment><ESocialSponsorship/></Segment>],
    ['E-Picnics', <Segment><EPicnics/></Segment>],
    ['E-Ball', <Segment><EBall/></Segment>],
])

constructor(){
    super();
    this.setMap(this.tabMap);
}
  
}