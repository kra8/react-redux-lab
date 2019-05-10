import { createAction } from 'redux-actions'

export const ActionTypes = {
  REQUEST_GET_TODOS: '@lab/REQUEST_GET_TODOS',
  SUCCESS_GET_TODOS: '@lab/SUCCESS_GET_TODOS',
  FAILURE_GET_TODOS: '@lab/FAILURE_GET_TODOS',
  REQUEST_ADD_TODOS: '@lab/REQUEST_ADD_TODOS',
  SUCCESS_ADD_TODOS: '@lab/SUCCESS_ADD_TODOS',
  FAILURE_ADD_TODOS: '@lab/FAILURE_ADD_TODOS',
  REQUEST_DELETE_TODOS: '@lab/REQUEST_DELETE_TODOS',
  SUCCESS_DELETE_TODOS: '@lab/SUCCESS_DELETE_TODOS',
  FAILURE_DELETE_TODOS: '@lab/FAILURE_DELETE_TODOS',
}

export default {
  requestGetTodos: createAction(ActionTypes.REQUEST_GET_TODOS),
  successGetTodos: createAction(ActionTypes.SUCCESS_GET_TODOS),
  failureGetTodos: createAction(ActionTypes.FAILURE_GET_TODOS),
  requestAddTodos: createAction(ActionTypes.REQUEST_ADD_TODOS),
  successAddTodos: createAction(ActionTypes.SUCCESS_ADD_TODOS),
  failureAddTodos: createAction(ActionTypes.FAILURE_ADD_TODOS),
  requestDeleteTodos: createAction(ActionTypes.REQUEST_DELETE_TODOS),
  successDeleteTodos: createAction(ActionTypes.SUCCESS_DELETE_TODOS),
  failureDeleteTodos: createAction(ActionTypes.FAILURE_DELETE_TODOS)
}
