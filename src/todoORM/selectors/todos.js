import orm from '../orm'
import { createSelector } from 'redux-orm'

export default createSelector(
  orm,
  state => state.getIn(['todoORM', 'view', 'selectedUserId']),
  (session, selectedUserId) => {
    const { Todo, User } = session
    const todos = Todo
      .all()
      .filter(todo => todo.userId === selectedUserId)
      .toRefArray()
      .map(todoRef => ({...todoRef, user: User.withId(todoRef.userId).ref }))
    console.log('@running todos selector', todos)
    return todos
  }
)
