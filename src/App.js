import React, { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import Name from "./components/Name";
import { MdAddCircle } from "react-icons/md";

let nextId = 0;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트공부하기",
      checked: false,
    },
    {
      id: 2,
      text: "헬스장가기",
      checked: false,
    },
    {
      id: 3,
      text: "방 청소하기",
      checked: false,
    },
  ]);
  const [userName, setUserName] = useState("");
  const [hello, setHello] = useState("");

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setHello(`ㅎㅇㅎㅇ ${userName}`);
  };
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <div>
      <Template todoLength={todos.length} userName={userName}>
        <Name
          onChange={onChange}
          userName={userName}
          onSubmit={onSubmit}
          hello={hello}
        />
        <TodoList
          todos={todos}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        <div className="add-todo-button" onClick={onInsertToggle}>
          <MdAddCircle />
        </div>
        {insertToggle && (
          <TodoInsert
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </Template>
    </div>
  );
};

export default App;
