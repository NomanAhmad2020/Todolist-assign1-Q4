const initialState = {
  todoList: [
      {
          title: 'Task One',
          id: "1",
          isdone: false
      }
        ]

}
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_TODO": {
          return {
            
            ...state,
            todoList: [
                ...state.todoList,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    isdone: false
                }
            ]

            
        }
         
      }

      case "DELETE_TODO": {
          return {
              ...state,
              todoList: state.todoList.filter( (item) => item.id !== action.payload.id)
          }
      }
      
      case "SORT_TODO_STATUS":{
          return {
                   
            ...state,
             todoList: state.todoList.filter((item) => item.isdone == true )
            
          }

      }
      case "SORT_TODO_STATUS_ALL": {
            return {
            ...state,
            ...state.todoList,
       
         }  
    }

      case "CHANGE_TODO_STATUS": {
        return {
            ...state,
            todoList: state.todoList.map((item) => {
                if (item.id == action.payload.id) {
                    return {
                        ...item, isdone: !item.isdone 
                    }
                }
                else {
                    return item;
                }
            })
        }
      }
     
      


      case "EDIT_TODO": {
          return {
              ...state,
              todoList: state.todoList.map((item) => {
                  if (item.id == action.payload.id) {
                      return {
                          ...item, title: action.payload.title
                      }
                  }
                  else {
                      return item;
                  }
              })
          }
      }

      case "DELETE_ALL_TODO": {
          return {
              ...state,
              todoList: []
          }
      }
      default: {
          return state
      }
  }
}

export default todoReducer

