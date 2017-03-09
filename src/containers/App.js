import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
import Loadable from 'react-loading-overlay'
const App = ({todos, actions}) => {
  console.log(todos.requesting);
  return  (
    <div>
      <Loadable
          active={todos.requesting}
          spinner
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute'
          }}
      />
      <Header addTodo={actions.addTodo} getExecises={actions.getExecises}/>
      <MainSection todos={todos.list} actions={actions} />
    </div>
  )}

App.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
