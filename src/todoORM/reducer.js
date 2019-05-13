import { Map } from 'immutable'
import uuid from 'uuid/v4'
import { handleActions } from 'redux-actions'
import { ActionTypes } from './actions'
import orm from './orm'

const initialState = Map({
  view: Map({
    selectedUserId: 'user-1'
  }),
  orm: orm.getEmptyState()
})

const reducer = handleActions({
  [ActionTypes.SUCCESS_GET_TODOS]: (state, action) => {
    const session = orm.session(state.get('orm'))
    const { Todo, User } = session

    action.payload.map(todo => {
      if (!Todo.idExists(todo.id)) {
        Todo.create(todo)
      }

      if (!User.idExists(todo.user.id)) {
        User.create(todo.user)
      }
    })
    return state.set('orm', session.state)
  },
  [ActionTypes.SELECT_USER]: (state, action) => {
    return state.withMutations(mutator => {
      mutator.setIn(['view', 'selectedUserId'], action.payload)
    })
  },
  [ActionTypes.REQUEST_ADD_TODOS]: (state, action) => {
    const session = orm.session(state.get('orm'))
    const { Todo } = session
    
    Todo.create({ id: uuid(), body: action.payload, userId: state.getIn(['view', 'selectedUserId']) })
    return state.set('orm', session.state)
  },
  [ActionTypes.REQUEST_DELETE_TODOS]: (state, action) => {
    const session = orm.session(state.get('orm'))
    const { Todo } = session

    Todo.withId(action.payload).delete()
    return state.set('orm', session.state)
  }
}, initialState)

export default reducer
