import React from 'react'

import TodoList from './ToDoList/TodoList'
import "./App.css"
import AddTask from './AddTask/AddTask'

function App() {
  return (
    <div className="App">
      <div className="linearWipe">
      <h1 >TO DO APP </h1>
      </div>
     
     <AddTask/>
     <TodoList/>
    </div>
  )
}

export default App