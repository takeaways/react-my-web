import React from 'react';
import Container from '../component/Container';
import TodoProvider from '../hooks/todoContext';
import TodoForm from '../component/TodoForm';
import TodoList from '../component/TodoList';

function Context() {
  return (
    <TodoProvider>
      <Container>
        <h1 key={'SS'}>useReducer + useContext = customHook</h1>
        <TodoForm />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default Context;
