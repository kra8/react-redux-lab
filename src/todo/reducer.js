import { Map } from 'immutable'
import uuid from 'uuid/v4'
import { handleActions } from 'redux-actions'
import { ActionTypes } from './actions'

const initialState = Map({
  todos: [],
  users: []
})

const reducer = handleActions({
  [ActionTypes.SUCCESS_GET_TODOS]: (state, action) => {
    return state.merge(action.payload.entities)
  },
  [ActionTypes.REQUEST_ADD_TODOS]: (state, action) => {
    return state.update('todos', todos => {
      const newId = uuid()
      const { body, user } = action.payload
      return {...todos, [newId]: { id: newId, body: body, user: user, status: 1 }}
    })
  },
  [ActionTypes.REQUEST_DELETE_TODOS]: (state, action) => {
    return state.update('todos', todos => {
      delete todos[action.payload]
      return { ...todos }
    })
  }
}, initialState)

export default reducer
