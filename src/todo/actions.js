export default {
  addTodo: text => ({ type: '@lab/addTodo', payload: text }),
  deleteTodo: id => ({ type: '@lab/deleteTodo', payload: id })
}
