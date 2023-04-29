import React, { useState } from 'react'
import TodoForm from './TodoForm'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
          <i onClick={() => removeTodo(todo.id)} class='bx bx-cut' ></i>
          <i onClick={() => setEdit({ id: todo.id, value: todo.text })} class='bx bx-edit'></i>
      </div>
    </div>
  ))
}

export default Todo
