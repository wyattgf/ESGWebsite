import React from 'react'
import {Segment } from 'semantic-ui-react'
import SideBarMenu from '../../SidebarMenu'
import FirstSemesterCourses from './FirstSemesterCourses'
import PrattRequirements from './PrattRequirements.js'
import SecondSemesterCourses from './SecondSemesterCourses'


export default class StudentResources extends SideBarMenu {
    tabMap = new Map([
    ['Pratt Requirements & General Questions', <Segment><PrattRequirements/></Segment>],
        ['First Semester Courses', <Segment><FirstSemesterCourses/></Segment>],
        ['Second Semester Courses', <Segment><SecondSemesterCourses/></Segment>],
        ['Clubs', <div></div>],
        ['Helpful Links', <div></div>]
  
    ])
  
    constructor(){
        super();
        this.setMap(this.tabMap);
    }
    
}