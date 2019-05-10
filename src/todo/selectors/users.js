import { createSelector } from 'reselect'
import User from '../models/User'

const getUsers = state => state.getIn(['todo', 'users'])

export default createSelector(
  [ getUsers ],
  users => {
    return Object.keys(users).map(userId => {
      return new User(users[userId])
    })
  }
)
