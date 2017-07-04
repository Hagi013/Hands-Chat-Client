/**
 * Created by shuhei.hagiwara on 2017/06/30.
 */

import axios from 'axios'
import BaseModel from './BaseModel'
import User from './User'
import Message from './Message'

export default class Channel extends BaseModel {
  constructor (channelObj) {
    super(channelObj)
    if (!super.checkObjNotNull(channelObj)) return
    this._name = channelObj.name
    this._purpose = channelObj.purpose
    this._members = super.checkObjNotNull(channelObj.members) ? channelObj.members.map(u => new User(u)) : []
    this._messages = super.checkObjNotNull(channelObj.messages) ? channelObj.messages.map(m => new Message(m)) : []
    return this
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

  get purpose () {
    return this._purpose
  }

  get members () {
    return this._members
  }

  get messages () {
    return this._messages
  }

  async fetchAllChannels () {
    const url = 'http://localhost:4000/api/chat_channels'
    const res = await axios.get(url)
    const channels = res.data.data.map(c => new Channel(c))
    return channels
  }

}