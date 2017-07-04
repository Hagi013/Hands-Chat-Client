/**
 * Created by shuhei.hagiwara on 2017/06/17.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import UserForm from './register-channel/UserForm'
import axios from 'axios'

export default class Channel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      channelName: '',
      channelPurpose: '',
      channelMembers: []
    }
    this.createChannel = this.createChannel.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
    this.setMembers = this.setMembers.bind(this)
  }
  async createChannel () {
    const url = 'http://localhost:4000/api/chat_channels'
    if (this.state.channelName === '' || this.state.channelPurpose === '') return
    await axios.post(url, {
      chat_channel: {
        name: this.state.channelName,
        purpose: this.state.channelPurpose,
        members: this.state.channelMembers
      }
    })
    this.setState({'channelName': ''})
    this.setState({'channelPurpose': ''})
    this.setState({'channelMembers': []})
  }
  onChangeField(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  setMembers (members) {
    this.state.channelMembers = members
    console.log('this.state.channelMembers', this.state.channelMembers)
  }
  render () {
    return (
      <div className="Channel">
        <div className="Channel-header">
          <Link to="/" >←</Link>
        </div>
        <div className="Add-channel">
          <div className="Channel-name">
            <div className="inputChannleName">Name</div>
            <div className="inputChannel">
              <input className="inputChannel" type="text" name="channelName" value={this.state.channelName} onChange={this.onChangeField} />
            </div>
          </div>
          <div className="Channel-purpose">
            <div className="inputChannlePurpose">Purpose</div>
            <div className="inputChannel">
              <input className="inputChannel" type="text" name="channelPurpose" value={this.state.channelPurpose} onChange={this.onChangeField} />
            </div>
          </div>
          <div className="Channel-member">
            <div className="inputChannleMember">Send invites to</div>
            <div className="inputChannel">
              <UserForm setMembers={this.setMembers} />
            </div>
          </div>
          <div className="Channel-create">
            <button className="channelAddButton" onClick={this.createChannel}>Create</button>
          </div>
        </div>
      </div>
    )
  }
}