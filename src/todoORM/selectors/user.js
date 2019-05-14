import orm from '../orm'
import { createSelector } from 'redux-orm'

export default createSelector(
  orm,
  state => state.getIn(['todoORM', 'view', 'selectedUserId']),
  (session, selectedUserId) => {
    const { User } = session
    const user = User.idExists(selectedUserId) ? User.withId(selectedUserId).ref : {}

    console.log('@running user selector', User.withId(selectedUserId))
    return user
  }
)
