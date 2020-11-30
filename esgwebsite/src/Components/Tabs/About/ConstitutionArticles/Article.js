import React, { Component }  from 'react';
import {List} from 'semantic-ui-react';

export default class Article extends Component {
    

    createBullets(responsibilities){
       var  bullets = []
        for (var i = 0; i < responsibilities.length;i++){
            bullets[i] = <List.Item>{responsibilities[i]}</List.Item>;
        }
        return <List ordered>{bullets}</List>;
    }
    
   handleMap(map){
       var sections = [];
       var index = 0;
       for (let key of map.keys()){
            sections[index] = [<h2>{key}</h2>, this.createBullets(map.get(key))];
            index+=1;
       }
       return sections;
   }
    
}