import React, { Component } from 'react'
import {Grid, GridRow, Image, Segment, Accordion } from 'semantic-ui-react'


export default class EPicnics extends Component {
    IMAGE_PATH = './images/';
    DESCRIPTION = [
        'We host E-Picnics once per semester. Come for music, free beer (for upperclassmen), and free food (for everyone). This event is also when we hand out our famous E-Picnic t-shirts that make all the Trinity students jealous.'
    ]

    sectionMap = new Map([
        ['E-Picnics', this.DESCRIPTION],
        ['', '']
    ])

    infoPanels =[
        {
            key: 'what',
            title: 'What are E-Picnics?',
            content: [
                'We host E-Picnics once per semester. Come for music, free beer (for upperclassmen), and free food',
                '(for everyone). This event is also when we hand out our famous E-Picnic t-shirts that make all the Trinity', 
                'students jealous.'
      
            ].join(' '),
          },
        
        
        {
            key: 'when',
            title: 'When are E-Picnics?',
            content: [
              'E-Picnics typically occur twice during the academic school year, once in the fall and once in the spring.',
              'Due to concerns from COVID-19, E-Picnics have been temporarily post-poned until further notice.' ,
              
            ].join(' '),
          },

          {
            key: 'where',
            title: 'Where are E-Picnics?',
            content: [
              'E-Picnics are sprawled across the expanse of E-Quad, in front of Hudson Hall' ,
            ].join(' '),
          },

          {
            key: 'who',
            title: 'Who are E-Picnics for?',
            content: [
              'Everyone!  I mean...if you\'re in Pratt of course.' ,
            ].join(' '),
          },
    ]

    render(){
        return(
            <div className='centerCentered'>
                <h2>E-Picnics</h2>
                <Grid>
                    <GridRow className='dynamicRow'>

                      <div className = 'dynamicEl' style={{'width': '100%'}}>
                        <Segment>
                          <Accordion defaultActiveIndex={0} panels={this.infoPanels} />
                        </Segment>
                      </div>
                      </GridRow>

                    <GridRow>
                      <div className = 'dynamicEl centerCentered'>
                        <Segment>
                        <Image className ='centerCentered' size = 'massive' src={require(this.IMAGE_PATH+'line-for-food.jpeg')}/>
                        </Segment>
                      </div>
             

                    </GridRow>
                </Grid>
            </div>
        )
    }
}