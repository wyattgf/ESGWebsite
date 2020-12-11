import React, { Component }  from 'react';
import {List} from 'semantic-ui-react';
import {WindowContext} from '../../../WindowContext'

export default class Article extends Component {
    sections = new Map();

    setSections(map){
        this.sections = map;
    }

  
    createBullets(responsibilities, context){
       var  bullets = []
        for (var i = 0; i < responsibilities.length;i++){
            bullets[i] = (
                        <List.Item style={{width: context.width/2}} key={i}>
                            {responsibilities[i]}
                        </List.Item>
                    )
        }
        return <List ordered>{bullets}</List>;
    }
    
   handleMap(context){
       var sections = [];
       var index = 0;
       for (let key of this.sections.keys()){
            sections[index] = [<h2 key = {key} style={{width: context.width/2}}>{key}</h2>, this.createBullets(this.sections.get(key), context)];
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