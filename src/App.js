import React, { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy milk" },
    { id: 2, content: "code" },
  ]);

  const deleteTodo = (id) => {
    let Todos = [...todos];
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app container">
      <h1 className="blue-text center">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
