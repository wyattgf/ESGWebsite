import React, { Component } from 'react'

export default class ContactContent extends Component {

    CONTENT = [
        'Our general contact email is esgduke@gmail.com',
        'You can also contact individual board members',
        'as well as the ESG President, Polin Liu Email: polin.liu [at] duke.edu'
    ]
  render() {
 

    return (
      <div >
          <div className='center'>{this.CONTENT[0]}</div> <br/>
          <div className='center'>{this.CONTENT[1]}</div> <br/>
          <div className='center'>{this.CONTENT[2]}</div> <br/>
      </div>
    )
  }
}