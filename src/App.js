
import React, { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // handle the form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      const todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([todo, ...todos]);
      setNewTodo('');
    }
  };

  // handle to click on TODO
  const handleTodoClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // TO Handle the rest click
  const handleResetClick = () => {
    setTodos([]);
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed).reverse();

  // Handle delete click

  // const handleDeleteClick = (id) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodos);
  //   localStorage.setItem('todos', JSON.stringify(updatedTodos));
  // };

  const handleRemoveClick = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <h1>TODO APP</h1>
      <form onSubmit={handleFormSubmit}>
        <input placeholder='Type Task Here' type="text" value={newTodo} onChange={handleInputChange} onKeyDown={(e) => e.key === 'Enter' && handleFormSubmit(e)} />
        <button type="submit">Add</button>
        <button className='resetBtn' onClick={handleResetClick}>Reset</button>
      </form>
      <div className='activeList'>
        <h2>Active TODO List</h2>
        <ul>
          {activeTodos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleTodoClick(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}

              {/* <button onClick={() => handleDeleteClick(todo.id)}>Delete</button> */}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed TODO List</h2>
        <ul>
          {completedTodos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleTodoClick(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
              {/* <button onClick={() => handleDeleteClick(todo.id)}>Delete</button> */}


            </li>
          ))}
        </ul>

        {completedTodos.length > 0 && (
          <button className='deletebtn' onClick={handleRemoveClick}>Remove Completed Tasks</button>
        )}
      </div>

    </div>
  );
}

export default App;
