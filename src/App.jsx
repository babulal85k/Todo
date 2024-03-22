import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import SERVER_URL from './assets/config'; // Import the SERVER_URL constant

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/todos`); // Use SERVER_URL constant
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post(`${SERVER_URL}/todos`, newTodo); // Use SERVER_URL constant
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (updatedTodo) => {
    try {
      // Send a PUT request to update the todo item on the server
      const response = await axios.put(`${SERVER_URL}/todos/${updatedTodo.id}`, updatedTodo);
  
      // Check if the update was successful (status code 200)
      if (response.status === 200) {
        // If successful, update the local state of todos
        const updatedTodos = todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
      }
    } catch (error) {
      // Handle any errors that occur during the update process
      console.error('Error updating todo:', error);
    }
  };
  

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/todos/${id}`); // Use SERVER_URL constant
      if (response.status === 200) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
