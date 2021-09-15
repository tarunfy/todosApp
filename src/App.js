import React, { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy milk" },
    { id: 2, content: "code" },
  ]);

  const deleteTodo = (id) => {
    const Todos = [...todos];
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        content: todo,
      },
    ]);
  };

  return (
    <div className="todo-app container">
      <h1 className="blue-text center">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
