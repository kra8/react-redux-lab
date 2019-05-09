import { fromJS } from 'immutable'

const initialState = fromJS({
  count: 0
})

const reducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return state.update('count', count => count + 1)
  }

  if (action.type === 'decrement') {
    return state.update('count', count => count - 1)
  }
  
  return state
}

export default reducer
