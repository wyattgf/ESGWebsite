import React from 'react'
import GridColumnSections from '../../GridColumnSections';
import {Grid, GridColumn, GridRow} from 'semantic-ui-react';



export default class FirstSemesterCourses extends GridColumnSections {
  profSocietyChaptersMap = new Map([
      ['American Institute of Aeronautics and Astronautics (AIAA)','https://sites.duke.edu/aero/'],
      ['American Society of Civil Engineers (ASCE)','https://dukeasce.wordpress.com/'],
      ['American Society of Mechanical Engineers (ASME)','https://sites.duke.edu/asmeduke/'],
      ['Biomedical Engineering Society (BMES)','http://bmes.pratt.duke.edu/'],
      ['Institute of Electrical and Electronic Engineers (IEEE)','https://foundry.duke.edu/people/duke-ieee'],
      ['Society of Black Engineers (NSBE)','https://www.facebook.com/dukensbe'],
      ['Society of Hispanic Professional Engineers (SHPE)','https://oie.duke.edu/knowledge-base/toolkit/society-hispanic-professional-engineers'],
      ['Society of Women Engineers','https://sites.duke.edu/dukeswe/']
  ])

  studentOrgsMap = new Map([
    ['Design for America (DFA)',''],
    ['Duke Electric Vehicles',''],
    ['DUKENGINEER Magazine',''],
    ['Duke Engineers for International Development (DEID)',''],
    ['Duke Makers',''],
    ['Duke Motorsports',''],
    ['Duke Robotics',''],
    ['Duke Smarthome',''],
    ['E-Team (Peer Pratt Advising Team)',''],
    ['Engineering World Health',''],
    ['HackDuke',''],
    ['InnoWorks','']
  ])

  createLinks(map){
      var links = [];
      var index = [];
      for (let key of map.keys()){
        links[index] = (
            <div><a className = 'externalLink' target="_blank" rel="noopener noreferrer" href={map.get(key)}>{key}</a></div>
        )
        index+=1;
      }
      return links;
  }
  sectionMap = new Map([
      ['Professional Society Chapters',this.createLinks(this.profSocietyChaptersMap)],
      ['Student Organizations',this.createLinks(this.studentOrgsMap)],
      ['Honor Societies','']

    ])

    constructor(){
      super()
      this.setMap(this.sectionMap);
      this.setColumnsPerRow(2);
      this.setClassName('centerCentered');
    }
  
    render() {
        return (
          <div className={this.classNombre}> 
            <Grid>
                <GridRow>
                    <GridColumn width={8}>
                    {this.createColumnRows()}
                    </GridColumn>
                    <GridColumn width={6}>
                        
                    </GridColumn>
                </GridRow>
            </Grid>
          </div>
        );
      }
    
}

  
