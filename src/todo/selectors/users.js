import { createSelector } from 'reselect'

const getUsers = state => state.getIn(['todo', 'users'])

export default createSelector(
  [ getUsers ],
  users => users.valueSeq()
)
