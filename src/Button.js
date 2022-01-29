import React, { Component } from 'react'
import './Button.css'

export class Button extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div
        className={`Button ${this.props.selected && 'selected'}`}
        onClick={() => this.props.update()}
      >
        {this.props.value}
      </div>
    )
  }
}

export default Button
