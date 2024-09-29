import React from 'react';
import { useTodos } from './hooks/useTodos';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'; 

const App = () => {
  const { todos, dispatch } = useTodos();

  return (
    <div className="container">
      <h1>To Do List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default App;
