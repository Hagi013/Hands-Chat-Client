/**
 * Created by shuhei.hagiwara on 2017/06/30.
 */

import axios from 'axios'
import BaseModel from './BaseModel'
import Channel from './Channel'

export default class User extends BaseModel {
  constructor (userObj) {
    super(userObj)
    if (!super.checkObjNotNull(userObj)) return
    this._name = userObj.name
    this._image = userObj.image
    this._profile = userObj.profile
    this._channels = super.checkObjNotNull(userObj.channels) ? userObj.channels.map(c => new Channel(c)) : []
    return this
  }

  get name () {
    return this._name
  }

  get image () {
    return this._image
  }

  get profile () {
    return this._profile
  }

  get channels () {
    return this._channels
  }

  async fetchAllUser () {
    const url = 'http://localhost:4000/api/chat_users'
    const res = await axios.get(url)
    const users = res.data.data.map(u => new User(u))
    return users
  }
}
