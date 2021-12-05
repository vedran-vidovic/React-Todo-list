import React, { useState, useRef, useEffect } from "react";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const local_storage_key = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(local_storage_key));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function HandleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return alert("type a todo!");
    else {
      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
      });
      todoNameRef.current.value = null;
    }
  }

  function handleClearTodo() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" placeholder="Write a task" ref={todoNameRef}></input>
      <button onClick={HandleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear Completed Todos</button>

      <div>
        {todos.filter((todo) => !todo.completed).length} todos left to do
      </div>
    </>
  );
}

export default App;
