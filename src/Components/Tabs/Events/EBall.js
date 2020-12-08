import React, { Component } from 'react'

export default class EBall extends Component {
    CONTENT = [
        "E-Ball has been CANCELLED due to the effects of COVID-19.  ESG is currently working diligently to determine the most efficient and effective way to refund the cost of E-Ball tickets to those who have paid."
    ]

    CONTENT2 = [
        "More information will be provided as the situation develops.  We appreciate your understanding in this difficult time."
    ]

    CONTENT3 = [
        'ESG wishes you and your loved ones the best of health.'
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