import React, { useState } from "react";

const EditTodo = ({ todo, names, onUpdate, onCancel }) => {
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedTodo);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={editedTodo.title}
          onChange={handleChange}
        />
        <select
          value={editedTodo.assignedTo}
          onChange={handleChange}
          name="assignedTo"
        >
          <option value="">Select Assignee</option>
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <input
          type="datetime-local"
          name="completionDateTime"
          value={editedTodo.completionDateTime}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
