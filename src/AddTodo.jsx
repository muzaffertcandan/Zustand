import { useState } from "react";
import { useTodosStore } from "./states/todos";

export default function AddTodo() {
  const addTodo = useTodosStore(store => store.addTodo);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  //Default eventleri ve önceden kalmış eventleri temizliyor
  const submitHandle = (e) => {
    e.preventDefault();
    addTodo({
      title,
      completed,
    });
    setTitle("");
    setCompleted(false);
  };

  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo"
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        {completed ? "Tamamlandı" : "bekliyor"}
      </label>
      <br />
      <button type="submit">Ekle</button>
      
    </form>
  );
}
