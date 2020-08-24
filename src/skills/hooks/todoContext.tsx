import React, { useContext, useReducer, createContext, useRef } from 'react';

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
  | { type: 'REMOVE'; id: number };

const initialState: Todo = {
  todos: [],
};

const reducer = (state: Todo = initialState, action: todoAction) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    }
    case 'DONE': {
      return {
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
    }
    case 'REMOVE': {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
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
export const useNextId = () => {
  const nextId = useRef(0);
  return nextId;
};
