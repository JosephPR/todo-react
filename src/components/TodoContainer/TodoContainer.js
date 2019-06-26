import React from 'react'
import TodoItem from '../TodoItem/TodoItem'


const TodoContainer = (props) => {
    const displayedTodos = props.todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo} />
    })
  return (
    <div>
      <h1>Todo Container </h1>
      {displayedTodos}
    </div>
  )
}

export default TodoContainer;
