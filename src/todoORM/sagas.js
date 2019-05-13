import { put, takeEvery } from 'redux-saga/effects'
import mockTodos from '../mock/todos.json'
import actions, { ActionTypes } from './actions'

const delay = time => new Promise(resolve => setTimeout(resolve, time))

export function* handleRequestGetTodos() {
  delay(1000)
  yield put(actions.successGetTodos(mockTodos.todos))
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* root() {
  yield takeEvery(ActionTypes.REQUEST_GET_TODOS, handleRequestGetTodos)
}