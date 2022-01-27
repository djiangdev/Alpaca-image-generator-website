import React, { Component } from 'react'
import './RenderAlpaca.css'

export class RenderAlpaca extends Component {
  render () {
    let design = this.props.design
    return (
      <div className='drawing'>
        <div id='alpaca' className='alpaca'>
          <img
            src={
              process.env.PUBLIC_URL +
              `/alpaca/backgrounds/${design.backgrounds}.png`
            }
            className='background'
            alt='background'
          />
          <img
            src={process.env.PUBLIC_URL + `/alpaca/nose.png`}
            className='nose'
            alt='nose'
          />
          <img
            src={process.env.PUBLIC_URL + `/alpaca/neck/${design.neck}.png`}
            className='neck'
            alt='neck'
          />
          <img
            src={process.env.PUBLIC_URL + `/alpaca/mouth/${design.mouth}.png`}
            className='mouth'
            alt='mouth'
          />
          <img
            src={process.env.PUBLIC_URL + `/alpaca/ears/${design.ears}.png`}
            className='ears'
            alt='ears'
          />
          <img
            src={process.env.PUBLIC_URL + `/alpaca/hair/${design.hair}.png`}
            className='hair'
            alt='hair'
          />
          <img
            src={process.env.PUBLIC_URL + `/alpaca/eyes/${design.eyes}.png`}
            className='eyes'
            alt='eyes'
          />

          {design.accessories === 'none' ? null : (
            <img
              src={
                process.env.PUBLIC_URL +
                `/alpaca/accessories/${design.accessories}.png`
              }
              className='accessories'
              alt='accessories'
            />
          )}
          <img
            src={process.env.PUBLIC_URL + `/alpaca/leg/${design.leg}.png`}
            className='leg'
            alt='leg'
          />
        </div>
      </div>
    )
  }
}

export default RenderAlpaca
