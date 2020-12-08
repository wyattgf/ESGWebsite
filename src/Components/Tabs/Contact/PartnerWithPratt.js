import React, {Component} from 'react'
import {Segment, Button, GridRow, Grid} from 'semantic-ui-react'

export default class PartnerWithPratt extends Component {
    ESG_EMAIL = 'esgduke@gmail.com';
    INDUSTRY_RELATIONS = 'matthew.jaynes@duke.edu';
    STUDENT_GROUP_LIASION = 'nikita.suri@duke.edu';
    PRESIDENT = 'polin.liu@duke.edu';

    SUMMARY = [
        'Getting involved with ESG a great way to publicize your company, connect with Duke engineers, and',
        'recruit. We offer several opportunities and events such as sponsorships, E-Socials, and E-Connects.' ,
        'panies can also sponsor and support individual engineering clubs. There are many other ways to get ',
        'involved and we encourage your company to contact us at esgduke@gmail.com or through the contact tab.',
    ].join(' ');

    //who it's being sent to, subject, body, cc (if any), text to display
    EMAILS = [
        [this.ESG_EMAIL,'Interested in Sponsorsing an E-Social','Hi!  I am FILL_IN_NAME who is interested in sponsorsing an E-Social with ESG.  Please let me know what steps I can take to get this done :)',this.INDUSTRY_RELATIONS, 'Host an E-Social'],
        [this.ESG_EMAIL,'Interested in Helping Fund Engineering Clubs', 'Hi!  I am a representative of COMPANY_NAME_HERE, and we are interested in helping sponsor an engineering club at Duke.  Please let me know what steps I can take to get this done :)',this.STUDENT_GROUP_LIASION, 'Sponsor a Club'],
        [this.PRESIDENT, 'Seeking to Speak with ESG Executive President', '',this.ESG_EMAIL, 'Contact our President']
    ]
    emailMap = new Map([
        ['E-Social', this.EMAILS[0]],
        ['Club Sponsor', this.EMAILS[1]],
        ['President', this.EMAILS[2]]
    ])

    CONTENT = [
        'Our general contact email is esgduke@gmail.com',
        'You can also contact individual board members',
        'as well as the ESG President, Polin Liu Email: polin.liu [at] duke.edu'
    ]

    createEmail(info){
        return (
            <a className = 'center' rel="noopener noreferrer" href={this.createLink(info)} target="_blank"  ><Button size='massive'>{info[4]}</Button></a>
        )
    }

    createLink(info){
        var to = info[0];
        var cc = info[3];
        var subject = info[1];
        var body = info[2];
        return ('mailto:'+ to + '?cc=' + cc + '&subject=' + subject + '&body=' + body);
    }

    
    render(){
        return(
            <Segment className='center'>
            <div>
                    <h3>Contact</h3>
                    <div >{this.CONTENT[0]}</div> <br/>
                    <div >{this.CONTENT[1]}</div> <br/>
                    <div >{this.CONTENT[2]}</div> <br/>
            </div>
            <div>
            <p >
                {this.SUMMARY} 
            </p>
            <Grid>
                <GridRow >
                {this.createEmail(this.emailMap.get('E-Social'))}
                {this.createEmail(this.emailMap.get('Club Sponsor'))}
                {this.createEmail(this.emailMap.get('President'))}
                </GridRow>
            </Grid>
            </div>
            </Segment>
        )
    }

}