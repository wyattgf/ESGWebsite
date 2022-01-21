import React, { Component } from 'react'

export default class EBall extends Component {
    CONTENT = [
        "E-Ball is BACK ON for Spring 2022!"
    ]

    CONTENT2 = [
        "Stay tuned for more information about ticketing, guests, and venue as they come!"
    ]

    CONTENT3 = [
        ':)'
    ]
    render(){
        return(
            <div className='centerCentered'>
                <h2>{this.CONTENT}</h2>
                <h3>{this.CONTENT2}</h3>
                <h3>{this.CONTENT3}</h3>
            </div>
        )
    }
}