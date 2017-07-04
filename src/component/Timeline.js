/**
 * Created by shuhei.hagiwara on 2017/06/14.
 */
import React from 'react'
import {Socket} from '../lib/PhoenixSocket'
import SideSection from '../component/SideSection.js'
import Messages from './timeline/Messages'
import '../App.css'

export default class Timeline extends React.Component {
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
    const socket = new Socket('ws://localhost:4000/socket/websocket')
    socket.connect()
    this.state.channel = socket.channel('rooms:1', {id: 1})
    this.state.channel.join()
    this.state.channel.on('recieve', (msg) => {
      this.handleMessage(msg)
    })}
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
      <div className="Side-section">
        <SideSection channels={this.props.channels}/>
      </div>
      <Messages messages={this.state.timeline}/>
      <div className="Input-message">
        <input type="text" className="inputMessage" name="message" value={this.state.message} onChange={this.onChangeField}/>
        <button className="submitButton" onClick={this.submitMessage}>Go</button>
      </div>
    </div>
    )
  }
}