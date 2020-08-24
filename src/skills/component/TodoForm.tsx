import React, { useState } from 'react';
import { useTodoDispatch, useNextId } from '../hooks/todoContext';
import Input, { useInput } from '../../common/components/Styles/Input';
function TodoForm() {
  const todoDispatch = useTodoDispatch();
  const nextId = useNextId();
  const { value, handleValue } = useInput();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        todoDispatch!({
          type: 'ADD',
          todo: {
            id: nextId.current,
            task: value,
            done: false,
          },
        });
        nextId.current += 1;
        handleValue('');
      }}
    >
      <Input label="input text" value={value} onChange={(e) => handleValue(e.target.value)} />
    </form>
  );
}

export default TodoForm;
