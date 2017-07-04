/**
 * Created by shuhei.hagiwara on 2017/06/30.
 */
import axios from 'axios'
import BaseModel from './BaseModel'
import Channel from './Channel'
import User from './User'

export default class Message extends BaseModel {
  constructor (messageObj) {
    super(messageObj)
    if (!super.checkObjNotNull(messageObj)) return
    this._text = messageObj.text
    this._image = messageObj.image
    this._channel = new Channel(messageObj.chat_channel)
    this._fromChatUser = new User(messageObj.from_chat_user)
    return this
  }

  get text () {
    return this._text
  }

  get image () {
    return this._image
  }

  get channel () {
    return this._channel
  }

  get fromChatUser () {
    return this._fromChatUser
  }

  async fetchAllMessages () {
    const url = 'http://localhost:4000/api/chat_messages'
    const res = await axios.get(url)
    const messages = res.data.data.map(m => new Message(m))
    return messages
  }
}