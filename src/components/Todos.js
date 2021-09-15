import React from "react";

function Todos({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div
          className="collection-item"
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer" }}
        >
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You got no todo's left</p>
  );
  return <div className="collection todos">{todoList}</div>;
}

export default Todos;
