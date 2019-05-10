import { createSelector } from 'reselect'
import Todo from '../models/Todo'
import { List, Map, fromJS } from 'immutable'

const getTodos = state => state.getIn(['todo', 'todos'])
const getUsers = state => state.getIn(['todo', 'users'])

export default createSelector(
  [ getTodos, getUsers ],
  (todos, users) => {
    return Object.keys(todos).map(todoId => {
      const todo = todos[todoId]
      return new Todo({ ...todo, user: users[todo.user] })
    })
  }
)
