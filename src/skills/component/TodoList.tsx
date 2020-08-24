import React from 'react';
import { useTodo } from '../hooks/todoContext';
function TodoList() {
  const todos = useTodo();
  return (
    <div>
      {todos.map((todo) => (
        <h1 key={todo.id}>{todo.task}</h1>
      ))}
    </div>
  );
}

export default TodoList;
