import React from 'react'
import GridColumnSections from '../../GridColumnSections';
import {Grid, GridRow, Image, Segment} from 'semantic-ui-react';
import {WindowContext} from '../../WindowContext.js'


export default class FirstSemesterCourses extends GridColumnSections {
  IMAGES_PATH = './images/';

  profSocietyChaptersMap = new Map([
      ['American Institute of Aeronautics and Astronautics (AIAA)','https://sites.duke.edu/aero/'],
      ['Academy for Model Aeronautics (AMA)','sites.duke.edu/dukeama'],
      ['American Society of Civil Engineers (ASCE)','https://dukeasce.wordpress.com/'],
      ['American Society of Mechanical Engineers (ASME)','https://sites.duke.edu/asmeduke/'],
      ['Biomedical Engineering Society (BMES)','http://bmes.pratt.duke.edu/'],
      ['Institute of Electrical and Electronic Engineers (IEEE)','https://foundry.duke.edu/people/duke-ieee'],
      ['Society of Black Engineers (NSBE)','https://www.facebook.com/dukensbe'],
      ['Society of Hispanic Professional Engineers (SHPE)','https://oie.duke.edu/knowledge-base/toolkit/society-hispanic-professional-engineers'],
      ['Society of Women Engineers','https://sites.duke.edu/dukeswe/'],
  ])

  studentOrgsMap = new Map([
    ['Combat Robotics','https://colab.duke.edu/projects/combatrobots'],
    ['Design for America (DFA)','facebook.com/DFADuke'],
    ['Duke Conservation Tech','dukeblueprint.com'],
    ['Duke Electric Vehicles (DEV)','http://www.duke-ev.org/'],
    ['DukEngineer Magazine','https://pratt.duke.edu/about/news/dukengineer'],
    ['Duke Engineers for International Development (DEID)','https://sites.duke.edu/deid/'],
    ['Duke Hyperloop','https://www.dukehyperloop.com/'],
    ['Duke Motorsports','http://dukemotorsports.blogspot.com/'],
    ['Duke Robotics','http://robotics.pratt.duke.edu/'],
    ['Duke Applied Machine Learning (DAML)','https://www.dukeaml.com/'],
    ['Duke Undergraduate Machine Learning (DUML)','https://dukeml.org/'],
    ['Duke Undergraduate Quantum Information Society (DUQIS)','duqis.org'],
    ['eNable','https://dukeenable.wordpress.com/'],
    //['E-Team (Peer Pratt Advising Team)','https://pratt.duke.edu/undergrad/students/advising/e-team'],
    ['Engineering World Health','https://globalhealth.duke.edu/projects/duke-engineering-world-health'],
    ['Females Excelling More in Math, Engineering & Science (FEMMES+)','sites.duke.edu/femmes'],
    ['Girls Engineering Change','facebook.com/DukeGEC'],
    ['HackDuke','https://hackduke.org/'],
    ['Innoworks','facebook.com/dukeinnoworks'],
    ['MEDesign','https://sites.duke.edu/medesign/'],
    ['Project Tadpole','https://dukegroups.com/tadpole/home/'],
    ['Runway of Dreams at Duke','https://www.runwayofdreams.org/'],
    ['Smarthome','http://smarthome.duke.edu/'],
    ['Tech For Equity','https://www.dukeaml.com/techforequity'],
  ])

  honorSocietiesMap = new Map([
    ['Tau Beta Pi (All majors)','https://web.duke.edu/TBPi/'],
    ['Pi Tau Sigma (ME)','https://pitausigma.org/chapters/Duke%20Pi%20Iota'],
    ['Chi Epsilon (CEE)','https://cee.duke.edu/about/awards-honors/chi-epsilon-honor-society'],
    ['Eta Kappa Nu (ECE)','https://hkn.ieee.org/hkn-chapters/all-chapters/delta-lambda-chapter/'],
    
  ])

  sectionMap = new Map([
    ['Professional Society Chapters',this.createLinks(this.profSocietyChaptersMap)],
    ['Student Organizations',this.createLinks(this.studentOrgsMap)],
    ['Honor Societies',this.createLinks(this.honorSocietiesMap)]

  ])

  createLinks(map){
      var links = [];
      var index = [];
      for (let key of map.keys()){
        links[index] = (
           <div key={key}><a  className = 'externalLink' target="_blank" rel="noopener noreferrer" href={map.get(key)}>{key}</a><br/></div>
        )
        index+=1;
      }
      return links;
  }

    constructor(){
      super()
      this.setMap(this.sectionMap);
      this.setColumnsPerRow(1);
      this.setClassName('leftCentered');
    }

    contentClass(context){
      return (context.width < context.shrunkWidth) ? 'halfContentShrunk centerCentered' : 'halfContent'
    }
  
    render() {
        return (
          <WindowContext.Consumer>
           {(props) => {
            return(
              <div className={this.originalClassNombre}> 
              <Grid>
                  <GridRow className='dynamicRow'>
  
                     <div className = {this.contentClass(props)}>
                      <Segment>
                            <h2 className='centerCentered'>Links</h2>
                            {this.createColumnRows(props)}
                        </Segment>
                     </div>
                      
                     
                     <div className = {this.contentClass(props)+ ' verticalAlign'}>
                      <Segment >
                        <Image alt='Duke Motorsports' size ='big' centered src={require("" + this.IMAGES_PATH + 'motorsports.jpg')}/> 
                        <Image alt='Duke Robotics' size ='big' centered src={require("" + this.IMAGES_PATH + 'robotics.jpg')}/>
                      </Segment>
                      </div>     
                     
                     
                  </GridRow>
                 
              </Grid>
            </div>
            )
           }}
           </WindowContext.Consumer>
        );
      }
    
}

  
