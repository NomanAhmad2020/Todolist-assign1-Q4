export const addTodo = ({ title, id,isdone }) => ({
  type: "ADD_TODO",
  payload: {
      title,
      id,
      isdone,
  }
})

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: {
      id
  }
})

export const deleteAll = () => ({
  type: "DELETE_ALL_TODO"
})

export const changeTodoStatus = id => ({
    type: "CHANGE_TODO_STATUS",
    payload: {id}


});

export const sort_todo = () => ({
  type: "SORT_TODO_STATUS"

})
export const sort_show_all = () => ({
type : "SORT_TODO_STATUS_ALL"

})

export const editTodo = ({ title, id }) => ({
  type: "EDIT_TODO",
  payload: {
      title,
      id,
      
  }
})