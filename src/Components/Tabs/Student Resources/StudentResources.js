import React from 'react'
import {Segment } from 'semantic-ui-react'
import SideBarMenu from '../../SidebarMenu'
import PrattRequirements from './PrattRequirements.js'


export default class StudentResources extends SideBarMenu {
    tabMap = new Map([
    ['Pratt Requirements & General Questions', <Segment><PrattRequirements/></Segment>],
        ['First Semester Courses', <div>hello?</div>],
        ['Second Semester Courses', <div></div>],
        ['Clubs', <div></div>],
        ['Helpful Links', <div></div>]
  
    ])
  
    constructor(){
        super();
        this.setMap(this.tabMap);
    }
    
}