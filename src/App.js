import React, { Component } from 'react'
import './App.css'
import Button from './Button'
import RenderAlpaca from './RenderAlpaca'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected_style: {
        accessories: 'none',
        backgrounds: 'darkblue70',
        ears: 'default',
        eyes: 'default',
        hair: 'default',
        leg: 'default',
        mouth: 'default',
        neck: 'default'
      }
    }
  }
  render () {
    return (
      <div className='App'>
        <h1>Alpaca Generator</h1>
        <div className='menu'>
          <div className='drawing'>
            <RenderAlpaca design={this.state.selected_style} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

