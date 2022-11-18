import React, { useState } from "react";

// import {Route} from 'react-router-dom'

import TodoList from "./components/TodoList/TodoList";
import NewTodo from "./components/NewTodo/NewTodo";
import { Todo } from "./models/todo.model";

const App: React.FC = () => {
  // let msgFlag: boolean = false;
  const [msgStatus, setMsgStatus] = useState<Boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [{ id: "t1", text: "Finish the course" }];

  const todoAddHandler = (text: string) => {
    if (text.length === 0) {
      setMsgStatus(true);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), text: text },
      ]);
      setMsgStatus(false);
    }
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} msgStatus={msgStatus} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
