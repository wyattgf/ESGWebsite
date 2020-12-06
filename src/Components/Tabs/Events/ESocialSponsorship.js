import React from 'react'
import { GridColumn, GridRow, Grid, Image } from 'semantic-ui-react'
import Article from '../About/ConstitutionArticles/Article'

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


    constructor(){
        super();
        this.setSections(this.QUESTIONS);
    }

    render(){
        return(
            <div className='esocialSponsor'>
                <Grid>
                    <GridRow>
                        <GridColumn width ={10}>
                            {this.handleMap()}
                        </GridColumn>
                        <GridColumn width={6}>
                            <Grid>
                                <GridRow>
                                    <Image src={require(this.IMAGE_PATH+'pod.jpg')}/>
                                </GridRow>
                                <GridRow>
                                <Image src={require(this.IMAGE_PATH+'twinnies.jpg')}/>
                                </GridRow>
                            </Grid>
                        </GridColumn>
                    </GridRow>
                </Grid>
    
            </div>
        )
    }
}