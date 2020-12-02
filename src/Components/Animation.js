import React from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'



// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default class Animation extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 300.00,
      minWidth: 300.00,
      scale: 0.75,
      scaleMobile: 1.00,
      color: 'rgb(245,245,245)',
      size: 1.4,
      backgroundColor: 'rgb(30, 44, 58)',
      spacing: 16.00
    })

  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      <h1 className='animationText'>Engineering Student Government <br/> @ Duke University</h1>
    </div>
  }
}