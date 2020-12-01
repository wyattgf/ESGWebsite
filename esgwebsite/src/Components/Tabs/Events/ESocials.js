import React, { Component } from 'react'
import {Grid, GridColumn, Image, Accordion} from 'semantic-ui-react'

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
            <div>
                {this.DESCRIPTION}
                <Accordion defaultActiveIndex={0} panels={this.infoPanels} />
                <Grid>
                    <Grid.Row>
                        
                    </Grid.Row>
                    <Grid.Row height={10}>
                        <GridColumn width={4}/>
                        <GridColumn width={4}>
                            <Image src={require(this.IMAGE_PATH+'e-social-twinnie.jpeg')}/>
                        </GridColumn>
                        <GridColumn width={4}>
                            <Image src={require(this.IMAGE_PATH+'e-social-twinnie2.jpeg')}/>
                        </GridColumn>
                        <GridColumn width={4}/>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}



