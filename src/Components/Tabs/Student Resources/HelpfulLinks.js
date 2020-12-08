import React from 'react'
import GridColumnSections from '../../GridColumnSections'
import {GridColumn} from 'semantic-ui-react'

export default class HelpfulLinks extends GridColumnSections {
    sectionMap = new Map([
        ['QDuke','Presented by The Chronicle, this website contains links to all just about every website you could possibly want. Some of the more useful links for freshmen include ACES, Sakai, RateMyProfessor, and Schedulator.'],
        ['Pratt Policies and Procedures','Like the name suggests, this site provides a comprehensive explanation of Pratt’s policies and procedures in regards to accomodations, course credit, drop/add period, withdrawing from a class, Dean\'s excuses, etc...'],
        ['E-Team','Here is a list of of all the current E-Teamers. They are Pratt\'s designated peer advisory group. Feel free to ask them any questions you might have.'],
        ['BME Degree Planning','Curriculum and Advising for Biomedical Engineering'],
        ['ECE Degree Planning','Curriculum and Advising for Electrical & Computer Engineering'],
        ['ME Degree Planning','Curriculum and Advising for Mechancial Engineering'],
        ['CEE Degree Planning','Curriculum and Advising Civil & Environmental Engineering']
    ]);

    parallelLinks = new Map([
        ['QDuke','http://www.qduke.com/'],
        ['Pratt Policies and Procedures','http://www.pratt.duke.edu/policies-procedures'],
        ['E-Team','http://www.pratt.duke.edu/e-team'],
        ['BME Degree Planning','http://www.bme.duke.edu/undergrad/curriculum'],
        ['ECE Degree Planning','http://www.ee.duke.edu/degree-planning'],
        ['ME Degree Planning','http://www.mems.duke.edu/undergrad/bse-degree-planning'],
        ['CEE Degree Planning','http://www.cee.duke.edu/undergrad/bse-degree-planning']
    ]);

    constructor(){
        super()
        this.setMap(this.sectionMap);
        this.setColumnsPerRow(2);
      }

      createColumns(){
        var index = 0;
        var columns = []
        for (let key of this.sectionMap.keys()){
            columns[index] = (
              <GridColumn key={key} width={Math.round(12/this.columnsPerRow)}>
               
                  <h3><a className={'externalLink headerThree'} target="_blank" rel="noopener noreferrer" href={this.parallelLinks.get(key)}>{key}</a></h3> <br/>
                  <div>{this.sectionMap.get(key)}</div>
                 
              </GridColumn>
            )
            index+=1;
        }
        return columns;
      }
}