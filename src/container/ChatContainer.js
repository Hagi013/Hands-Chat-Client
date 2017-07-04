/**
 * Created by shuhei.hagiwara on 2017/06/30.
 */

import React from 'react'
import {connect} from 'react-redux'
import { fetchAllChannels } from '../actions/index'
import { allChannels } from '../reducer/Chat'
import Timeline from '../component/Timeline'

class ChatContainer extends React.Component {

  async componentDidMount () {
    const {fetchChannels} = this.props
    await fetchChannels()
  }

  render () {
    const {channels} = this.props
    return(
      <Timeline
        channels={channels}
      />
    )
  }
}

const mapStateToProps = state => ({
    channels: allChannels(state)
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: async () => {
    await fetchAllChannels()(dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer)