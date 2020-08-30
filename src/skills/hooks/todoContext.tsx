import React, { useContext, useReducer, createContext, useRef } from 'react';
import { setStorage, getStorage } from '../../common/utils';

interface Todo {
  todos: {
    id: number;
    task: string;
    done: boolean;
  }[];
}

type todoAction =
  | {
      type: 'ADD';
      todo: {
        id: number;
        task: string;
        done: boolean;
      };
    }
  | { type: 'DONE'; id: number }
  | { type: 'REMOVE'; id: number }
  | { type: 'LOAD' };

const initialState: Todo = {
  todos: [],
};

const reducer = (state: Todo = initialState, action: todoAction) => {
  switch (action.type) {
    case 'LOAD': {
      return {
        ...state,
        todos: getStorage('todos') ? getStorage('todos').todos : [],
      };
    }
    case 'ADD': {
      const newState = {
        ...state,
        todos: state.todos.concat(action.todo),
      };

      setStorage('todos', newState);
      return newState;
    }
    case 'DONE': {
      const newState = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }
          return {
            ...todo,
            done: !todo.done,
          };
        }),
      };
      setStorage('todos', newState);
      return newState;
    }
    case 'REMOVE': {
      const newState = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
      setStorage('todos', newState);
      return newState;
    }
    default:
      return state;
  }
};
const TodoContext = createContext<Todo>(initialState);
const TodoDispatchContext = createContext<React.Dispatch<todoAction> | null>(null);

export default function TodoProvider({ children }: { children: React.ReactNode }) {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoContext.Provider value={store}>{children}</TodoContext.Provider>
    </TodoDispatchContext.Provider>
  );
}

export const useTodo = () => {
  const { todos } = useContext(TodoContext);
  return todos;
};
export const useTodoDispatch = () => {
  const dispatch = useContext(TodoDispatchContext);
  if (dispatch) return dispatch;
};

export const useTodoAction = () => {
  return {
    load: (): todoAction => ({ type: 'LOAD' }),
    add: (todo: { id: number; task: string; done: boolean }): todoAction => ({ type: 'ADD', todo }),
    remove: (id: number): todoAction => ({ type: 'REMOVE', id }),
    finish: (id: number): todoAction => ({ type: 'DONE', id }),
  };
};
export const useNextId = () => {
  const nextId = useRef(0);
  return nextId;
};
