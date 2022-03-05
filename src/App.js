import React, { Component } from 'react'
import './App.css'
import Button from './Button'
import RenderAlpaca from './RenderAlpaca'
let domToImage = require('dom-to-image-more')

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

class App extends Component {
  static defaultProps = {
    options: {
      accessories: ['earings', 'flower', 'glasses', 'headphone'],
      backgrounds: [
        'blue50',
        'blue60',
        'blue70',
        'darkblue30',
        'darkblue50',
        'darkblue70',
        'green50',
        'green60',
        'green70',
        'grey40',
        'grey70',
        'grey80',
        'red50',
        'red60',
        'red70',
        'yellow50',
        'yellow60',
        'yellow70'
      ],
      ears: ['default', 'tilt-backward', 'tilt-forward'],
      eyes: ['default', 'angry', 'naughty', 'panda', 'smart', 'star'],
      hair: ['default', 'bang', 'curls', 'elegant', 'fancy', 'quiff', 'short'],
      leg: [
        'default',
        'bubble-tea',
        'cookie',
        'game-console',
        'tilt-backward',
        'tilt-forward'
      ],
      mouth: ['default', 'astonished', 'eating', 'laugh', 'tongue'],
      neck: ['default', 'bend-backward', 'bend-forward', 'thick']
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      currentMenu: 'accessories',
      selected_style: {
        accessories: 'headphone',
        backgrounds: 'darkblue70',
        ears: 'default',
        eyes: 'default',
        hair: 'default',
        leg: 'default',
        mouth: 'default',
        neck: 'default'
      }
    }

    this.random = this.random.bind(this)
    this.download = this.download.bind(this)
  }

  setCurrentMenu (value) {
    this.setState({
      currentMenu: value
    })
  }

  setStyle (option, value) {
    this.setState({
      selected_style: { ...this.state.selected_style, [option]: value }
    })
  }

  random () {
    let selected_styles = {}
    Object.entries(this.props.options).map(
      obj =>
        (selected_styles[obj[0]] =
          obj[1][Math.floor(Math.random() * obj[1].length)])
    )
    this.setState({
      selected_style: selected_styles
    })
  }

  download () {
    let node = document.getElementById('alpaca')
    domToImage
      .toPng(node)
      .then(dataUrl => {
        let link = document.createElement('a')
        link.download = 'alpaca-' + Date.now() + '.jpg'
        link.href = dataUrl
        link.click()
      })
      .catch(error => {
        console.error('Oops, something went wrong!', error)
      })
  }

  render () {
    let accessories_options = Object.entries(this.props.options).map(
      (obj, index) => {
        return (
          <Button
            key={index}
            value={obj[0]}
            selected={this.state.currentMenu === obj[0]}
            update={() => this.setCurrentMenu(obj[0])}
          />
        )
      }
    )

    let style_options = []
    this.props.options[this.state.currentMenu].forEach((element, index) => {
      style_options.push(
        <Button
          key={index}
          value={element}
          selected={
            this.state.selected_style[this.state.currentMenu] === element
          }
          update={() => this.setStyle(this.state.currentMenu, element)}
        />
      )
    })

    return (
      <div className='App'>
        <h1>Alpaca Generator</h1>
        <div className='menu'>
          <div className='drawing'>
            <RenderAlpaca design={this.state.selected_style} />
            <div className='downloadOptions'>
              <div className='button Random' onClick={this.random}>
                Random
              </div>
              <div className='button Download' onClick={this.download}>
                Download
              </div>
            </div>
          </div>
          <div className='options'>
            <div className='AccessoriesOptions'>
              <div className='title'>Accessories the Alpaca's</div>
              {accessories_options}
            </div>
            <div className='Style'>
              <div className='title'>Style</div>
              {style_options}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
