import React, { Component } from 'react'
import {Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'

export default class EPicnics extends Component {
    IMAGE_PATH = './images/';
    DESCRIPTION = [
        'We host E-Picnics once per semester. Come for music, free beer (for upperclassmen), and free food (for everyone). This event is also when we hand out our famous E-Picnic t-shirts that make all the Trinity students jealous.'
    ]

    render(){
        return(
            <div className='ePicnic'>
                <Grid>
                    <GridRow>
                        <div>{this.DESCRIPTION}</div>
                    </GridRow>
                    <GridRow>
                        <GridColumn width={16}>
                             <Image circular src={require(this.IMAGE_PATH+'line-for-food.jpeg')}/>
                        </GridColumn>

                    </GridRow>
                </Grid>
            </div>
        )
    }
}