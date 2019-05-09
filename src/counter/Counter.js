import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from './actions'

const Counter = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const increment = React.useCallback(() => dispatch(actions.increment()), [dispatch])
  const decrement = React.useCallback(() => dispatch(actions.decrement()), [dispatch])

  return (
    <>
      <button onClick={() => increment()}>Click Increment</button>
      <button onClick={() => decrement()}>Click Decrement</button>
      <p>count: {count}</p>
    </>
  )
}

export default Counter
