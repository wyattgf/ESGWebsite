import React, { Component }  from 'react';
import {List} from 'semantic-ui-react';
import {WindowContext} from '../../../WindowContext'

export default class Article extends Component {
    sections = new Map();
    dynamic = true;
    sectionCount = 0;

    setDynamic(bo){
        this.dynamic = bo;
    }

    setSections(map){
        this.sections = map;
    }

    setWidth(context){
        return this.dynamic ? context.width/2 : ''
    }

  
    createBullets(responsibilities, context){
       var  bullets = []
        for (var i = 0; i < responsibilities.length;i++){
            bullets[i] = (
                        <List.Item style={{width: this.setWidth(context)}} key={i}>
                            {responsibilities[i]}
                        </List.Item>
                    )
        }
        this.sectionCount += 1;
        return <List key = {responsibilities[0]} ordered>{bullets}</List>;
    }
    
   handleMap(context){
       var sections = [];
       var index = 0;
       for (let key of this.sections.keys()){
            sections[index] = [<h2 key = {key} style={{width: this.setWidth(context)}}>{key}</h2>, this.createBullets(this.sections.get(key), context)];
            index+=1;
       }
       return sections;
   }

   render(){
    return(
       <div className='constPopup'>
           <WindowContext.Consumer>
           {(props) => {
            return(
                <div>
                     {this.handleMap(props)} 
                </div>
            )
           }}
           </WindowContext.Consumer>
       </div>
    ) 
}
    
}