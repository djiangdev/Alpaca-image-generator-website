import React, { Component } from 'react'
import './RenderAlpaca.css'

export class RenderAlpaca extends Component {
  render () {
    let images = Object.entries(this.props.design).map((obj, index) => {
      return (
        <img
          key={index}
          src={process.env.PUBLIC_URL + `/alpaca/${obj[0]}/${obj[1]}.png`}
          className={obj[0]}
          alt={obj[0]}
        />
      )
    })
    return (
      <div className='drawing'>
        <div id='alpaca' className='alpaca'>
          {images}
        </div>
      </div>
    )
  }
}

export default RenderAlpaca
