/**
 * Created by shuhei.hagiwara on 2017/06/14.
 */
import React from 'react'
import {Socket} from '../lib/PhoenixSocket'
import Messages from './timeline/Messages'
import '../App.css';

export default class Timeline2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channel: null,
      timeline: [],
      open: false,
      message:''
    }
    this.onChangeField = this.onChangeField.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  componentDidMount () {
    const socket = new Socket('ws://localhost:4001/socket/websocket')
    socket.connect()
    this.state.channel = socket.channel('rooms:lobby', {})
    this.state.channel.join()
    this.state.channel.on('recieve', (msg) => {
      this.handleMessage(msg)
    })  }
  componentWillUnmount () {
    this.state.channel.onClose()
  }
  handleMessage (msg) {
    const timeline = this.state.timeline
    timeline.push(msg.message)
    this.setState({
      timeline: timeline,
      open: true
    })
  }
  submitMessage () {
    this.state.channel.push("send_message", {message: this.state.message})
    this.setState({
      message: ''
    })
  }
  onChangeField (e) {
    this.setState({[e.target.name]: e.target.value})
  }
  render () {
    return (
    <div className="Timeline">
      <div className="input-message">
        <input type="text" className="message" name="message" value={this.state.message} onChange={this.onChangeField}/>
      </div>
      <button onClick={this.submitMessage}>submit</button>
      <Messages messages={this.state.timeline} />
    </div>
    )
  }
}