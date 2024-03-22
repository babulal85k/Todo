// AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [completionDateTime, setCompletionDateTime] = useState('');

  // List of names for the dropdown menu
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for title, assignedTo, and completionDateTime
    if (!title.trim() || !assignedTo.trim() || !completionDateTime.trim()) {
      return;
    }
    const newTodo = {
      title,
      status: 'pending',
      assignedTo,
      completionDateTime,
    };
    onAdd(newTodo);
    setTitle('');
    setAssignedTo('');
    setCompletionDateTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
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
        value={completionDateTime}
        onChange={(e) => setCompletionDateTime(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
