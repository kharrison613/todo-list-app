import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
  const [todoText, setTodoText] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch({ type: 'ADD_TODO', payload: todoText });
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
