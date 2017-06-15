/**
 * Created by shuhei.hagiwara on 2017/06/15.
 */
import React from 'react'

export default class Messages extends React.Component {
  render () {
    const msgs = this.props.messages
    const messagesDom = msgs.map(m => {
      return <li>{m}</li>
    })
    console.log('messagesDom', messagesDom)
    return (
      <div>
        <ul className="timeline">{messagesDom}</ul>
      </div>
    )
  }
}