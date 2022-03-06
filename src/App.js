import React, { useState, useEffect } from 'react'
import './App.css'
import Button from './Button'
import RenderAlpaca from './RenderAlpaca'

const domToImage = require('dom-to-image-more')

const initOptions = {
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

const initState = {
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

function App () {
  const [accessories, setAccessories] = useState([])
  const [optionData, setOption] = useState(initOptions)
  const [stateData, setState] = useState(initState)

  function setCurrentMenu (value) {
    setState({
      ...stateData,
      currentMenu: value
    })
  }

  function setStyle (option, value) {
    setState({
      ...stateData,
      selected_style: { ...stateData.selected_style, [option]: value }
    })
  }

  function random () {
    let selected_styles = {}
    Object.entries(optionData).map(
      obj =>
        (selected_styles[obj[0]] =
          obj[1][Math.floor(Math.random() * obj[1].length)])
    )
    setState({
      ...stateData,
      selected_style: selected_styles
    })
  }

  function download () {
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

  let accessories_options = Object.entries(optionData).map((obj, index) => {
    return (
      <Button
        key={index}
        value={obj[0]}
        selected={stateData.currentMenu === obj[0]}
        update={() => setCurrentMenu(obj[0])}
      />
    )
  })

  let style_options = []
  optionData[stateData.currentMenu].forEach((element, index) => {
    style_options.push(
      <Button
        key={index}
        value={element}
        selected={stateData.selected_style[stateData.currentMenu] === element}
        update={() => setStyle(stateData.currentMenu, element)}
      />
    )
  })

  return (
    <div className='App'>
      <h1>Alpaca Generator</h1>
      <div className='menu'>
        <div className='drawing'>
          <RenderAlpaca design={stateData.selected_style} />
          <div className='downloadOptions'>
            <div className='button Random' onClick={random}>
              Random
            </div>
            <div className='button Download' onClick={download}>
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

export default App
