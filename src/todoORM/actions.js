import { createAction } from 'redux-actions'

export const ActionTypes = {
  REQUEST_GET_TODOS: '@lab/todoORMREQUEST_GET_TODOS',
  SUCCESS_GET_TODOS: '@lab/todoORMSUCCESS_GET_TODOS',
  FAILURE_GET_TODOS: '@lab/todoORMFAILURE_GET_TODOS',
  REQUEST_ADD_TODOS: '@lab/todoORMREQUEST_ADD_TODOS',
  SUCCESS_ADD_TODOS: '@lab/todoORMSUCCESS_ADD_TODOS',
  FAILURE_ADD_TODOS: '@lab/todoORMFAILURE_ADD_TODOS',
  REQUEST_DELETE_TODOS: '@lab/todoORMREQUEST_DELETE_TODOS',
  SUCCESS_DELETE_TODOS: '@lab/todoORMSUCCESS_DELETE_TODOS',
  FAILURE_DELETE_TODOS: '@lab/todoORMFAILURE_DELETE_TODOS',
  SELECT_USER: '@lab/todoORM/SELECT_USER'
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
  failureDeleteTodos: createAction(ActionTypes.FAILURE_DELETE_TODOS),
  selectUser: createAction(ActionTypes.SELECT_USER)
}
