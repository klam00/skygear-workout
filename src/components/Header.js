import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    getExecises: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  handleClick = () => {
    this.props.getExecises()
  }

  render() {
    return (
      <header className="header">
        <h1>Workout</h1>
        <TodoTextInput newTodo
                       onClick={this.handleClick}
                       onSave={this.handleSave}
                       placeholder="What needs to be done?" />
      </header>
    )
  }
}
