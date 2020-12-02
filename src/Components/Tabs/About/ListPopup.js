import React, { Component } from 'react'
import {List, Popup } from 'semantic-ui-react'
import "../../../index.css"

class ListPopup extends Component {
  
  render(){
    return <Popup content={this.props.info} trigger={<List.Item>{this.props.event}</List.Item>} />
  }
}

export default ListPopup