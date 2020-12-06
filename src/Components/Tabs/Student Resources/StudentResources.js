import React from 'react'
import {Segment } from 'semantic-ui-react'
import SideBarMenu from '../../SidebarMenu'
import FirstSemesterCourses from './FirstSemesterCourses'
import PrattRequirements from './PrattRequirements.js'
import SecondSemesterCourses from './SecondSemesterCourses'
import Clubs from './Clubs'


export default class StudentResources extends SideBarMenu {
    tabMap = new Map([
    ['Pratt Requirements & General Questions', <Segment><PrattRequirements/></Segment>],
        ['First Semester Courses', <Segment><FirstSemesterCourses/></Segment>],
        ['Second Semester Courses', <Segment><SecondSemesterCourses/></Segment>],
        ['Clubs', <Segment><Clubs/></Segment>],
        ['Helpful Links', <div></div>]
  
    ])
  
    constructor(){
        super();
        this.setMap(this.tabMap);
    }
    
}