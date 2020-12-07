import React, { Component } from 'react'
import {Segment, Image, Grid, GridColumn, GridRow} from 'semantic-ui-react'

export default class Home extends Component {
    IMAGES_PATH = './images/';

    DO = 'Engineering Student Government (ESG) is the governing body whose purpose is to serve the students of Duke\'s Pratt School of Engineering.  Through this service, we strive to heed the concerns, both small and large, of Duke\'s engineers in order to provide them with the best possible undergraduate experience that could be afforded to them throughout their time at Duke.';
    ARE = 'We are an assorted group of elected representatives comprised of the four undergraduate classes of the Pratt School of Engineering.  Simply, we are engineers, just like you: trying to make Pratt a more favorable experience for all of us, one step at a time. ';
    INVOLVED ='Getting involved with ESG can take a wide variety of forms.  Whether you are interested in serving on the executive board (elections in the Fall for Freshman, and in the Spring for Upperclassman) or you are simply looking for funding for your club or a cool engineering-related project, ESG has got your back and wants to work with YOU to create the undergraduate experience that YOU desire.  If you want to speak to someone directly, feel free to reach out to our email at the bottom of this page or to any of the Officers under the Executive Board tab on the About page.';

    createColumnConent(title, text){
        return (
            <Segment className='center'>
                <h3>{title}</h3>
                    <p>{text}</p>
            </Segment>
        )
    }  

    render(){
        return(
            <div className = 'tabContent' >
                
                    <Grid>
                        <GridRow>
                            <GridColumn width={8}>
                                {this.createColumnConent('What we DO',this.DO)}
                                {this.createColumnConent('Who we ARE',this.ARE)}
                                {this.createColumnConent('Get INVOLVED',this.INVOLVED)}
                            </GridColumn>
                            <GridColumn width={8}>
                                 <Segment>
                                    <Image alt='E-Quad' size ='big' centered src={require("" + this.IMAGES_PATH + 'pratt-pretty.jpeg')}/>
                                 </Segment>
                            </GridColumn>
                        </GridRow>
                    </Grid>
               
            </div>
        )
    }
}