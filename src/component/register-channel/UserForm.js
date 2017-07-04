/**
 * Created by shuhei.hagiwara on 2017/07/02.
 */
import React from 'react'
import User from '../../model/User'

export default class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      allUsers: [],
      users: [],
      selectedUsers:[], // [{id: xx, name: ''}, ...]
      inputKeys: ''
    }
    this.onChangeField = this.onChangeField.bind(this)
    this.selected = this.selected.bind(this)
    this.filterUsers = this.filterUsers.bind(this)
    this.filterSelectedUsers = this.filterSelectedUsers.bind(this)
  }

  async componentDidMount () {
    const user = await new User().fetchAllUser()
    this.setState({
      allUsers: user,
      users: user
    })
  }

  onChangeField (e) {
    this.setState({
      [e.target.name]: e.target.value,
      users: this.filterUsers(e.target.value)
    })
  }

  filterUsers (char) {
    if (char === null || char === '') return this.filterSelectedUsers()
    return this.filterSelectedUsers().filter(u => u.name.indexOf(char) !== -1)
  }

  filterSelectedUsers () {
    const selectedUsers = this.state.selectedUsers.map(u => u.id)
    return this.state.allUsers.filter(u => selectedUsers.indexOf(u.id) === -1)
  }

  selected (user) {
    this.state.selectedUsers.push({id: user.target.value, name: user.target.textContent})
    this.setState({
      selectedUsers: this.state.selectedUsers,
      users: this.filterSelectedUsers(),
      inputKeys: ''
    })
    this.setMembers()
  }

  setMembers() {
    this.props.setMembers(this.state.selectedUsers.map(u => {return {id: u.id}}))
  }

  render () {
    const users = this.state.users.map(u => <li className="User-name" onClick={this.selected} value={u.id}>{u.name}</li>)
    const selectedUsers = this.state.selectedUsers.map(u => <span className="Button-style">{u.name}</span>)
    return (
      <div className="User-form">
        {selectedUsers}
        <input type="text" className="inputChannel" name="inputKeys" value={this.state.inputKeys} onChange={this.onChangeField}/>
        <div className="List-item">
          <ul className="User-list">
            {users}
          </ul>
        </div>
      </div>
    )
  }

}