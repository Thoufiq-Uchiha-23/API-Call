import { useState, useEffect } from "react";
import "./App.css";

interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response)
      .then((e) => e.json())
      .then((e) => setTodos(e));
  }, []);
  return <div className="App">
    {todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>
    })}
  </div>;
}

export default App;
