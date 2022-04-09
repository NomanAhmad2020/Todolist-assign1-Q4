import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteAll,sort_todo,sort_show_all } from '../actions';
import List from './list'
import { v4 as uuid } from 'uuid';


const Todo = () => {
    const [inputData, setInputData] = useState();

    const list = useSelector((val) => {
        return val.todoReducer.todoList
       
    })
    const dispatch = useDispatch();
    const handleTodo = (task) => {
        try {
            if (!task) throw "Empty Field"
            const payload = {
                title: task,
                id: uuid(),
                isdone: false
            }
            const action = addTodo(payload);
            dispatch(action);
            console.log("payload", payload)
        }
        catch (error) {
            console.log("error", error)
        }
    }

        return (
        <div>
            <div>
                
                <input value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button onClick={() => handleTodo(inputData)}>
                    Add Todo
                </button>
                
                <br/>
                <button onClick={()=> dispatch(deleteAll())}>
                    Delete All
                </button>
                <button onClick={()=> dispatch(sort_todo())}>Show Completed </button>
                <button onClick={()=> dispatch(sort_show_all())}>Show All </button>
            </div>
            {
                list.map((item) => {
                    return (
                        <div>
                            
                        <List data={item}  />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo