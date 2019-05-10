import { put, takeEvery } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import mockTodos from '../mock/todos.json'
import actions, { ActionTypes } from './actions'
import todoSchema from './schemas/todo'

const delay = time => new Promise(resolve => setTimeout(resolve, time))

export function* handleRequestGetTodos() {
  delay(1000)
  const normalizedData = normalize(mockTodos.todos, [todoSchema])
  yield put(actions.successGetTodos(normalizedData))
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* root() {
  yield takeEvery(ActionTypes.REQUEST_GET_TODOS, handleRequestGetTodos)
}