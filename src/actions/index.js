/**
 * Created by shuhei.hagiwara on 2017/06/30.
 */
import * as types from '../constants/ActionTypes'
import Channel from '../model/Channel'

const addChannelState = channels => ({
  type: types.ADD_CHANNELS,
  channels
})

export const addChannels = channels => (dispatch, getState) => {
  dispatch(addChannelState(channels))
}


export const fetchAllChannels = () => async (dispatch) => {
  const c = new Channel()
  const channels = await c.fetchAllChannels()
  dispatch(addChannels(channels))
}