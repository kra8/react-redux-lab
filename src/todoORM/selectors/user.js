import orm from '../orm'
import { createSelector } from 'redux-orm'

export default createSelector(
  orm,
  state => state.getIn(['todoORM', 'view', 'selectedUserId']),
  (session, selectedUserId) => {
    const user = session.User.withId(selectedUserId)

    if (user) {
      console.log('@running user selector', user.ref)
      return user.ref
    }

    return {}
  }
)
