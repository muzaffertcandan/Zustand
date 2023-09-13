import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTodosStore } from "./states/todos";
import AddTodo from "./AddTodo";


function App() {
  const todos = useTodosStore((state) => state.todos);
  const removeTodo = useTodosStore(state => state.removeTodo)
  console.log("todos", todos)
  return (
    <>
      {todos.length === 0 && <div>Hic todo eklenmemis</div>}
      {todos.map((todo, key) => (
        <div key={key}>
          {todo.title} <br />
          {todo.completed ? "tamamlandı" : "bekliyor"}
          <br />
          <button onClick={()=> removeTodo(key)}>Sil</button>
        </div>
      ))}
      <AddTodo/>
    </>
  );
}

export default App;
