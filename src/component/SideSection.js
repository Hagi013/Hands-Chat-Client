/**
 * Created by shuhei.hagiwara on 2017/06/16.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router';

class SideSection extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    let channels = <li className="Channel-name">データがありません</li>
    if (this.props.channels !==  undefined && this.props.channels !== null && this.props.channels.length !== 0) {
      channels = this.props.channels.map(c => {
        return <li className="Channel-name">{c.name}</li>
      })
    }
    return (
      <div className="SideSction">
        CHANNEL <Link to="/channle">+</Link>
        <div className="Channel-list-section">
          <ul className="Channel-list">
            {channels}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(SideSection)