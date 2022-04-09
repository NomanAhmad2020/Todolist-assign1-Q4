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
              todoList: [...state.todoList, action?.payload]
              
          }
         
      }
      case "DELETE_TODO": {
          return {
              ...state,
              todoList: state.todoList.filter((item) => item.id !== action.payload.id)
          }
      }
      
      case "SORT_TODO_STATUS":{
          return {
            ...state,
             todoList: state.todoList.filter((item) => item.isdone == true )
            
          }

      }
      case "SORT_TODO_STATUS_ALL":{
        return {
            ...state,
            //todoList: state.todoList.sort(isdone)
            //        todoList: state.todoList.sort() (function(x,y){return (x===y)? 0 : x? -1 : 1;})
            //...state, 
           //todoList: state.todoList(item)
            
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

