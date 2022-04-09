import React, { useState } from 'react'
import { deleteTodo, editTodo,changeTodoStatus } from '../actions';
import { useDispatch } from 'react-redux'

const List = ({ data }) => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState();
    const [editState, setEditState] = useState(false);

    const [checked,isChecked] = useState(false);
    


    //const [toggle,setToggle] = useState(false);


    console.log("data-list.js", data)

    const handleEdit = (task) => {
        try {
            if (!task) throw "Empty Field"
            const payload = {
                title: task,
                id: data.id,
                isdone: false
            }
            const action = editTodo(payload);
            dispatch(action);
            console.log("payload", payload)
            setEditState(false)
        }
        catch (error) {
            console.log("error", error)
        }
    
    }
    const handleCheck =() => dispatch(changeTodoStatus(data.id))
    return (
        <div>
            <div>
                {data.title}
 
                <button onClick={() => dispatch(deleteTodo(data.id))}>
                    Delete
                </button>
                <button onClick={() => setEditState(!editState)}>
                   Edit
                </button>
                {
                    editState ?
                        <>
                            <input value={inputData}
                                onChange={(e) => setInputData(e.target.value)} />]
                            <button onClick={() => handleEdit(inputData)}>
                                Submit
                            </button>
                        </>
                        : ""
                }
                
                 Completed?
                 <input type="checkbox" onChange= {handleCheck} checked={data.isdone}/> 
                
                 {/* <input type="checkbox" onClick= {() => setToggle(!toggle)} checked={data.isdone} />  */}
               
                
            </div>
        </div>
    )
}

export default List