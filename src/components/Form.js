import React, { useEffect } from "react";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        { id: todos.length + 1, title: input, completed: false },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form">
        <input
        type="text"
        placeholder="Enter a Todo..."
        className="input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">
        +
      </button>
      </div>
      
    </form>
  );
};

export default Form;
