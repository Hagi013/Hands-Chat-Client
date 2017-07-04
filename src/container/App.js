import React, { Component } from 'react'
import '../App.css';
import { Route, Switch } from 'react-router-dom'
import Timeline from '../component/Timeline'
import Timeline2 from '../component/Timeline2'
import ChatContainer from './ChatContainer'
import RegisterChannle from '../component/RegisterChannel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Switch>
          <Route exact path="/" component={ChatContainer}/>
          <Route path="/channle" component={RegisterChannle}/>
        </Switch>
      </div>
    )
  }
}

export default App;
