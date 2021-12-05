import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
    <div key={todo.id}>
      <Todo todo={todo} toggleTodo={toggleTodo} />
    </div>
  ));
};
