import React, { Component }  from 'react';
import {Segment, Popup, Card} from 'semantic-ui-react';
import ArticleOne from './ConstitutionArticles/ArticleOne'
import ArticleTwo from './ConstitutionArticles/ArticleTwo'
import "../../../index.css"
import ArticleThree from './ConstitutionArticles/ArticleThree';
import ArticleFour from './ConstitutionArticles/ArticleFour';
import ArticleFive from './ConstitutionArticles/ArticleFive';
import ArticleSix from './ConstitutionArticles/ArticleSix';

export default class Constitution extends Component {
    ARTICLES = new Map([
        ["Article I. Election of Officers",<ArticleOne/>],
        ["Article II. Duties and Powers of Officers",<ArticleTwo/>],
        ["Article III. Academic Committment",<ArticleThree/>],
        ["Article IV. Amendments",<ArticleFour/>],
        ["Article V. Positions Through Applications",<ArticleFive/>],
        ["Article VI. Non-Discrimination Committment",<ArticleSix/>]
    ])
    createPopups(){
       var articles = [];
       var index = 0;
       for (let key of this.ARTICLES.keys()){
            articles[index] = 
            <Popup
                content={this.ARTICLES.get(key)}
                on='click'
                pinned
                trigger={<Card className='article' style={{width:"500px"}}><Card.Header>{key}</Card.Header></Card>}
            />
            index+=1;
       }
       return <Segment>{articles}</Segment>;
    }

    render(){
        return(
          <div>
               {this.createPopups()}
          </div>
        ) 
    }
}