import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskItem from '../TaskItem/TaskItem'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const selectTodos = state => state.todos

const TodoList = () => {
  const todos = useSelector(selectTodos)
  const [etat, setEtat] = useState("")

  return (

    <div>

     < div style={{textAlign:"center"}}>
     <ButtonGroup   variant="contained" color="warning" size="large" aria-label="large button group">
        <Button key="one" onClick={() => {

          setEtat(true)

        }}>DONE</Button>
        <Button key="two" onClick={() => {
          setEtat(false)

        }}
        >NOT</Button>
        <Button key="three" onClick={() => {

          setEtat("")

        }}>ALL</Button>
      </ButtonGroup>
     </div>
     

      {todos.map((todo, index) => (todo.isDone === etat || etat === "") ? < TaskItem key={index} todo={todo} /> : "")}
    </div>
  )





  // return <ul>{renderedListItems}</ul>
}

export default TodoList

