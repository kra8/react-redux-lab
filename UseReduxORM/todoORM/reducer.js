import { Map } from 'immutable'
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

    action.payload.map(todoRef => {
      const user = User.upsert(todoRef.user)
      Todo.upsert({ ...todoRef, user })
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
    const { Todo, User } = session

    Todo.create({ body: action.payload, user: User.withId(state.getIn(['view', 'selectedUserId'])) })
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
