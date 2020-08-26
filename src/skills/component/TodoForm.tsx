import React from 'react';
import { useTodoDispatch, useNextId, useTodoAction } from '../hooks/todoContext';
import Input, { useInput } from '../../common/components/Styles/Input';
function TodoForm() {
  const todoDispatch = useTodoDispatch();
  const actions = useTodoAction();
  const nextId = useNextId();
  const { value, handleValue } = useInput();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const todo = {
          id: nextId.current,
          task: value,
          done: false,
        };
        todoDispatch!(actions.add(todo));
        nextId.current += 1;
        handleValue('');
      }}
    >
      <Input label="input text" value={value} onChange={(e) => handleValue(e.target.value)} />
    </form>
  );
}

export default TodoForm;
