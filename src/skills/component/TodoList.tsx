import React, { useCallback } from 'react';
import { useTodo, useTodoAction, useTodoDispatch } from '../hooks/todoContext';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
function TodoList() {
  const todos = useTodo();
  const dispatch = useTodoDispatch();
  const actions = useTodoAction();
  const handleDelete = useCallback((id: number) => {
    if (dispatch) {
      dispatch(actions.remove(id));
    }
  }, []);
  const handleDone = useCallback((id: number) => {
    if (dispatch) {
      dispatch(actions.finish(id));
    }
  }, []);

  return (
    <Container>
      <h1>Todo list</h1>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            task={todo.task}
            onDelete={() => {
              handleDelete(todo.id);
            }}
            onFinish={() => {
              handleDone(todo.id);
            }}
            done={todo.done}
          />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 28px;
  width: 360px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  & > h1 {
    font-size: 2rem;
    border-bottom: 1px solid gray;
  }
  & > ul {
    height: 300px;
    flex-grow: 1;
    overflow: auto;
  }
`;

export default TodoList;
