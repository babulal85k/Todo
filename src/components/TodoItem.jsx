// TodoItem.js
import React from "react";
import EditTodo from "./EditTodo";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const handleUpdate = (updatedTodo) => {
    onUpdate(updatedTodo);
  };

  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleToggleStatus = () => {
    const updatedTodo = {
      ...todo,
      status: todo.status === "pending" ? "completed" : "pending",
    };
    onUpdate(updatedTodo);
  };

  const handleToggleEdit = () => {
    const updatedTodo = { ...todo, editing: !todo.editing }; // Toggle the 'editing' state
    onUpdate(updatedTodo);
  };

  return (
    <div>
      {todo.editing ? (
        <EditTodo
          todo={todo}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onCancel={() => handleUpdate({ ...todo, editing: false })} // Cancel editing
          names={names}
        />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Completion Date & Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{todo.title}</td>
              <td>{todo.assignedTo}</td>
              <td>{todo.status}</td>
              <td>{todo.completionDateTime}</td>
              <td>
                <button onClick={handleToggleEdit}>Edit</button>
                <button onClick={handleToggleStatus}>Toggle</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoItem;
