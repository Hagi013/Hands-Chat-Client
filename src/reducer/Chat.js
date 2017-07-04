/**
 * Created by shuhei.hagiwara on 2017/06/29.
 */
import { combineReducers } from 'redux'
import {
  ADD_CHANNELS,
  ADD_MESSAGES
} from '../constants/ActionTypes'

const initialState = {
  channels: []
}

const chat = (state = initialState.channels, action) => {
  switch (action.type) {
    case ADD_CHANNELS:
      if (state.length > 0) {
        const existingId = state.map(c => c.id)
        const addChannels = action.channels.filter(c => existingId.indexOf(c.id) === -1)
        return state.concat([], addChannels)
      }
      return state.concat([], action.channels)
    default:
      return state
  }
}

export default combineReducers({
  chat
})

export const allChannels = state => {
  if( state.chat.length === 0) return []
  return state.chat.chat
}
