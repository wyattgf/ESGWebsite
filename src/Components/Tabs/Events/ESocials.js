import React, { Component } from 'react'
import {Grid, GridRow, Image, Accordion, Segment} from 'semantic-ui-react'

export default class ESocial extends Component {
    IMAGE_PATH = './images/'

    infoPanels =[
        {
            key: 'what',
            title: 'What are E-Socials?',
            content: [
              'Every Friday at 4:30 pm ESG invites a company or campus organization to host an E-Social at Twinnie’s,',
              'located in Fitzpatrick – Ciemas. We provide free beer (for upperclassmen) and free food (for everyone). This',
               'event is a great way to network with companies and other engineers!' ,
      
            ].join(' '),
          },
        
        
        {
            key: 'when',
            title: 'When are E-Socials?',
            content: [
              'E-Socials occur every Friday between 4:30 and 6:00 pm.  Due to COVID-19, E-Socials have transitioned online,' ,
              'over zoom.  Keep an eye on your class\'  Pratt Facebook page for further details',
            ].join(' '),
          },

          {
            key: 'where',
            title: 'Where are E-Socials?',
            content: [
              'E-Socials are located at Twinnie\'s Cafe, in E-Quad, near Hudson Hall' ,
            ].join(' '),
          },

          {
            key: 'who',
            title: 'Who are E-Socials for?',
            content: [
              'Everyone!  I mean...if you\'re in Pratt of course.' ,
            ].join(' '),
          },
    ]



    render(){
        return(
          <div className='centerCentered'>
              <h2>E-Socials</h2>
                <Grid>
                    <GridRow className='dynamicRow'>

                      <div className = 'dynamicEl' style={{'width': '100%'}}>
                        <Segment>
                          <Accordion defaultActiveIndex={0} panels={this.infoPanels} />
                        </Segment>
                      </div>
                      </GridRow>

                    <GridRow >
                      <div className = 'dynamicEl'>
                        <Segment style={{maxWidth: "450px"}}>
                        <Image size = 'big' src={require(this.IMAGE_PATH+'e-social-twinnie.jpeg')}/>
                        </Segment>
                      </div>
                            
                      <div className = 'dynamicEl'>
                        <Segment style={{maxWidth: "450px"}}>
                        <Image size = 'big' src={require(this.IMAGE_PATH+'e-social-twinnie2.jpeg')}/>
                        </Segment>
                      </div>


                    </GridRow>
                </Grid>
            </div>
        )
    }
}



