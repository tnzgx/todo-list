import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {

  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>

      <div>
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
}

export default App;
