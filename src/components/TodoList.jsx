// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
