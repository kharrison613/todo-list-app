import { useReducer } from 'react';

const initialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{ id: Date.now(), text: action.payload, completed: false }, ...state];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return { todos, dispatch };
};
