import React from "react";

export const Todo = ({ todo, toggleTodo }) => {
  function handleToggleTodo() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleTodo}
        />
        {todo.name}
      </label>
    </div>
  );
};
