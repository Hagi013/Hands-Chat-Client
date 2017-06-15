import React, { Component } from 'react'
import './App.css';
import Timeline from './component/Timeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="chat-timeline">
          <Timeline />
        </div>
      </div>
    );
  }
}

export default App;
