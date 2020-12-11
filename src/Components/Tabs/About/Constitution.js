import React, {useContext} from 'react';
import {Segment, Popup, Card} from 'semantic-ui-react';
import ArticleOne from './ConstitutionArticles/ArticleOne'
import ArticleTwo from './ConstitutionArticles/ArticleTwo'
import "../../../index.css"
import ArticleThree from './ConstitutionArticles/ArticleThree';
import ArticleFour from './ConstitutionArticles/ArticleFour';
import ArticleFive from './ConstitutionArticles/ArticleFive';
import ArticleSix from './ConstitutionArticles/ArticleSix';
import {WindowContext} from '../../WindowContext'


export default function Constitution() {
    var context = useContext(WindowContext);
    const ARTICLES = new Map([
        ["Article I. Election of Officers",<ArticleOne context={context}/>],
        ["Article II. Duties and Powers of Officers",<ArticleTwo context={context}/>],
        ["Article III. Academic Committment",<ArticleThree context={context}/>],
        ["Article IV. Amendments",<ArticleFour context={context}/>],
        ["Article V. Positions Through Applications",<ArticleFive context={context}/>],
        ["Article VI. Non-Discrimination Committment",<ArticleSix context={context}/>]
    ])
    function createPopups(){
       var articles = [];
       var index = 0;
       for (let key of ARTICLES.keys()){
           var content = <div style={{width: context.width/2}}>{ARTICLES.get(key)}</div>
            articles[index] = 
            <Popup
                key={key}
                content={content}
                on='click'
                pinned
                trigger={<Card className='article' ><Card.Header >{key}</Card.Header></Card>}
            />
            index+=1;
       }
       return <Segment>{articles}</Segment>;
    }
        return(
          <div>
               {createPopups()}
          </div>
        ) 

}