import { createSelector } from 'reselect'

const getTodos = state => state.getIn(['todo', 'todos'])
const getUsers = state => state.getIn(['todo', 'users'])

export default createSelector(
  [ getTodos, getUsers ],
  (todos, users) => {
    return todos.map(todo => todo.set('user', users.get(todo.user))).valueSeq()
  }
)
