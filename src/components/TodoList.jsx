import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({todos}) => {
  return (
    <ul className="app__list">
      {todos.map(todo => {
        return <TodoItem key={todo.id}  {...todo}/> 
      })}
      
    </ul>
  )
}

export default TodoList;
