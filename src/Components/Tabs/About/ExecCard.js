import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

export default class ExecCard extends Component {
    IMAGE_PATH = './images/'

    createEmailLink(email){
        return ('mailto:' + email);
    }

    render(){
        return (
                <div className='execCard'>
                    <Card  key = {this.props.name}>
                        <Image alt = {this.props.name} src={require("" + this.IMAGE_PATH + this.props.image)} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header >{this.props.name}</Card.Header>
                        <Card.Meta>
                    Class of {this.props.graduation}
                        </Card.Meta>
                        <Card.Description>
                    Position: {this.props.title} <br/>
                    Email: <a className = 'externalLink' rel="noopener noreferrer" href={this.createEmailLink(this.props.email)} target="_blank">{this.props.email}</a> <br></br>
                    Fun Fact: {this.props.fact} <br/>
                        </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
        )
    }

}