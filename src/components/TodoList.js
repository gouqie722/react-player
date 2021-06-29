import React from 'react'
import Todo from './Todo.js'

const TodoList = ({ TodoItems, onTodoClick }) => (
  <ul>
    { TodoItems.map((todo, index) => {
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)}></Todo>
    }) }
  </ul>
)


export default TodoList