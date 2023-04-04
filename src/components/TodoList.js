import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <li className={`todo ${todo.completed ? "complete " : ""}`} key={todo.div}>
          <div>
            <p>{todo.title}</p>
          </div>

          <div className="button">
            <button
              className="button-complete"
              id={`${todo.completed ? "btn-completed" : ""}`}
              onClick={() => handleComplete(todo)}
            >
              <AiOutlineCheckCircle />
            </button>
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              <AiOutlineEdit />
            </button>
            <button
              className="button-delete"
              onClick={() => handleDelete(todo)}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
