import { Map, fromJS } from 'immutable'
import uuid from 'uuid/v4'
import { handleActions } from 'redux-actions'
import { ActionTypes } from './actions'
import { createState } from './utils'
import Todo from './models/Todo'

const initialState = fromJS({
  todos: [],
  users: []
})

const reducer = handleActions({
  [ActionTypes.SUCCESS_GET_TODOS]: (state, action) => {
    return state.merge(createState(action.payload))
  },
  [ActionTypes.REQUEST_ADD_TODOS]: (state, action) => {
    return state.withMutations(mutator => {
      const { body, user } = action.payload
      const newTodo = new Todo({ id: uuid(), body: body, user: user })
      mutator.update('todos', todos => todos.set(newTodo.id, newTodo))
    })
  },
  [ActionTypes.REQUEST_DELETE_TODOS]: (state, action) => {
    return state.withMutations(mutator => {
      mutator.update('todos', todos => todos.remove(action.payload))
    })
  }
}, initialState)

export default reducer
