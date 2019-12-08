import React, { useState } from 'react';
// import { Route } from "react-router-dom";
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        return todoId !== todo.id;
      });
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default App;
