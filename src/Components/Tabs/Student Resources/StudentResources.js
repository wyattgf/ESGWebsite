import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import SideBarMenu from '../../SidebarMenu'


export default class StudentResources extends SideBarMenu {
    tabMap = new Map([
        ['Pratt Requirements & General Questions', <div></div>],
        ['First Semester Courses', <div></div>],
        ['Second Semester Courses', <div></div>],
        ['Clubs', <div></div>],
        ['Helpful Links', <div></div>]
  
    ])
  
    constructor(){
        super();
        this.setMap(this.tabMap);
    }
    
}