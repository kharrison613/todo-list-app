import React, { useState } from 'react';

const TodoItem = ({ todo, dispatch }) => {
  const [editText, setEditText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: editText } });
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })} disabled={!todo.completed}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
