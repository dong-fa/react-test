import React, { useState } from "react";
import "./App.css";

function Todo(props) {
  return (
    <div className="card-contain">
      <div>{props.todo.body}</div>
    </div>
  );
}

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, body: "React 배워보기" }]);
  const [body, setTodo] = useState("");

  const clickHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      body: body,
    };

    setTodos([...todos, newTodo]);
  };
  return (
    <div className="layout">
      <div className="add-todo">
        <input value={body} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={clickHandler}>추가하기</button>
      </div>
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <div className="todo-card">
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
