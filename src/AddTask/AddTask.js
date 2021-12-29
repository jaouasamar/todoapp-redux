import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTask } from '../Actions/actions'

const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const handleChange=(e)=>
    {
        setText(e.target.value);
    }
    const handleAdd = () => {
        const newTask = {
          id: Math.random(),
          task: text,
          isDone: false,
        };
        dispatch(addTask(newTask));
        setText('');
      };
    
    return (
        
        <div className='add'>
            <input type="text" value={text}  onChange={handleChange}></input>
            <button  onClick={()=>{handleAdd()}}>Add</button>
        </div>
       
        
    )
}

export default  AddTask
