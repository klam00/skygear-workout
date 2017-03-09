import { REQUESTING, DONE, ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = {
  requesting: false,
  list: [
  ]
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case REQUESTING:
      return {
        ...state,
        requesting: true,
      };
    case DONE:
      const stretches = [{
        id: 0,
        completed: false,
        text: 'Stretches'
      }]
      return {
        requesting: false,
        list: stretches.concat(action.payload.map((e, i) => {
          return {
            id: i + 1,
            completed: false,
            text: e
          }
        }))
      };
    case ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          }
        ]
      }

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(todo =>
          todo.id !== action.id
        )
      }

    case COMPLETE_TODO:
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === action.id ?
                              { ...todo, completed: !todo.completed } :
                              todo
        )
      }

    case COMPLETE_ALL:
      const areAllMarked = state.list.every(todo => todo.completed)
      return {
        ...state,
        list: state.list.map(todo => ({
        ...todo,
        completed: !areAllMarked
        }))
      }

    case CLEAR_COMPLETED:
      return {
        ...state,
        list: state.list.filter(todo => todo.completed === false)
      }

    default:
      return state
  }
}
