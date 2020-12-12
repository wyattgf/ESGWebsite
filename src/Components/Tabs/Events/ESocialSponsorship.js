import React from 'react'
import { Segment, GridRow, Grid, Image } from 'semantic-ui-react'
import Article from '../About/ConstitutionArticles/Article'
import {WindowContext} from '../../WindowContext.js'

export default class ESocialSponsorship extends Article {
    IMAGE_PATH = './images/'

    ESOCIALS_ARE = [
        "Fun, informal informational/recruiting events on Friday afternoons from 4:30 to 6:00 pm.",
        "Great way to network with interested students in a casual setting over games, food, and drinks."
    ]

    LOGISTICS = [
        "Companies are free to host however they wish.",
        "Successful past events have included games or activities such as jeopardy or pub quizzes.",
        "May host entire E-Social, be paired up with another company, or paired with one or several student groups",
        "We will do our best to accommodate your wishes, but it may depend on the selected dates."
    ]

    HOSTING_COST = [
        "Food for E-Social attendees. (Eg. Pizza, snacks, small sandwiches, etc.)",
        "Typically enough for 150-250 attendees to have a small snack, not necessarily a full meal",
        "ESG sponsors two kegs of beer at all events for attendees of age. Companies are welcome to help sponsor as well; it is greatly appreciated but by no means required."
    ]

    INVOLVED = [
        "Contact the Director of Industry Relations, Matthew Jaynes (matthew.jaynes@duke.edu).",
        "Earlier contacts are more likely to receive their first choice dates."
    ]

    QUESTIONS = new Map([
        ['What are E-Socials?', this.ESOCIALS_ARE],
        ['What are the logistics?', this.LOGISTICS],
        ['What is the cost of hosting?', this.HOSTING_COST],
        ['How can you be involved?', this.INVOLVED],
        ['ESG looks forward to working with you!', []]

    ])


    constructor(props){
        super(props);
        this.setSections(this.QUESTIONS);
        this.setDynamic(false);
    }

    contentClass(props){
        return (props.width < props.shrunkWidth) ? 'halfContentShrunk centerCentered' : 'halfContent'
      }


    render(){
        return(
            <div className='esocialSponsor'>


                <WindowContext.Consumer>
                    {(props) => {
                        return(
                            <Grid>
                                <GridRow>
                                    <div className={this.contentClass(props)}>
                                        <Segment>
                                            {this.handleMap()}
                                        </Segment>

                                    </div>
                                    
                                    <div className={this.contentClass(props)+ ' verticalAlign'}>
                                        <Segment className = ''>
                                            <Image size = 'large' className='centerCentered' src={require(this.IMAGE_PATH+'pod.jpg')}/>
                                      
                                            <Image size= 'large'className='centerCentered' src={require(this.IMAGE_PATH+'twinnies.jpg')}/>
                                        </Segment>
                                        
                                    </div>
                                        
                                </GridRow>
                        </Grid>
                    )
                    }}
                </WindowContext.Consumer>


            </div>
        )
    }
}