import React, { Component }  from 'react';
import {List} from 'semantic-ui-react';

export default class Article extends Component {
    sections = new Map();

    setSections(map){
        this.sections = map;
    }


    createBullets(responsibilities){
       var  bullets = []
        for (var i = 0; i < responsibilities.length;i++){
            bullets[i] = <List.Item>{responsibilities[i]}</List.Item>;
        }
        return <List ordered>{bullets}</List>;
    }
    
   handleMap(){
       var sections = [];
       var index = 0;
       for (let key of this.sections.keys()){
            sections[index] = [<h2>{key}</h2>, this.createBullets(this.sections.get(key))];
            index+=1;
       }
       return sections;
   }

   render(){
    return(
       <div className='constPopup'>
           {this.handleMap()} 
       </div>
    ) 
}
    
}