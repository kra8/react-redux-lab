import orm from '../orm'
import { createSelector } from 'redux-orm'

export default createSelector(
  orm,
  session => {
    const users = session.User.all().toRefArray()
    console.log('@running users selector', users)
    return users
  }
)
