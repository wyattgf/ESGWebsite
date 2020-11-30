import React, { Component }  from 'react';
import {Segment, Popup, Card} from 'semantic-ui-react';
import ArticleOne from './ConstitutionArticles/ArticleOne'
import "../../../index.css"

export default class Constitution extends Component {
    

    render(){
        return(
           <Segment>
               <Popup
                    content={<ArticleOne />}
                    on='click'
                    pinned
                    trigger={<Card><Card.Header>Article I. Election of Officers</Card.Header></Card>}
                >
                </Popup>
                <Popup
                    content={<ArticleOne />}
                    on='click'
                    pinned
                    trigger={<Card><Card.Header>Article II. Duties and Powers of Officers</Card.Header></Card>}
                >
                </Popup>
                <Popup
                    content={<ArticleOne />}
                    on='click'
                    pinned
                    trigger={<Card><Card.Header>Article III. Academic Committment</Card.Header></Card>}
                >
                </Popup>
                <Popup
                    content={<ArticleOne />}
                    on='click'
                    pinned
                    trigger={<Card><Card.Header>Article IV. Amendments</Card.Header></Card>}
                >
                </Popup>
                <Popup
                    content={<ArticleOne />}
                    on='click'
                    pinned
                    trigger={<Card><Card.Header>Article V. Positions Through Applications</Card.Header></Card>}
                >
                </Popup>
                <Popup
                    content={<ArticleOne />}
                    on='click'
                    pinned
                    trigger={<Card><Card.Header>Article VI. Non-Discrimination Committment</Card.Header></Card>}
                >
                </Popup>
           </Segment>
        ) 
    }
}