import React, { useState } from 'react'
import './TaskItem.css'
import { useDispatch } from "react-redux"; 
import { editTask, handleComplete } from '../Actions/actions';

const TaskItem = ({todo}) => {
   
    const dispatch = useDispatch();
    const [editedTask, setEditedTask] = useState(todo.task);
    const handleChange=(e)=>
    {
        setEditedTask(e.target.value);
    }
    return (
        <>
        <div className='task'>
            <input   onChange={handleChange} value={editedTask} ></input> 
            <button onClick={()=>dispatch(editTask(editedTask))}>Edit</button>
            <button onClick={()=>dispatch(handleComplete(todo.id))}>{todo.isDone?"Undo":"Complete"}</button>
          
            
        </div>
        </>
    )
}

export default TaskItem
