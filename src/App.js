import React, { Component } from 'react'
import Wmap from './components/Wmap'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='mapContainer'>
          <Wmap />
        </div>
        <div className='chatContainer'>
          <p>asdasdasd</p> <button id="focusBtn">Focus</button>
        </div>
        
      </div>
    )
  }
}
