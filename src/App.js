import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [labels, setLabels] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get("http://backend-spring:8080/api/tasks").then(res => setTasks(res.data));
    axios.get("http://backend-node:3001/api/labels").then(res => setLabels(res.data));
  }, []);

  const addTask = () => {
    axios.post("http://localhost:8080/api/tasks", { title: newTask, completed: false })
         .then(res => setTasks([...tasks, res.data]));
    setNewTask("");
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} />
      <button onClick={addTask}>Adicionar</button>
      <ul>{tasks.map(t => <li key={t.id}>{t.title}</li>)}</ul>

      <h2>Rótulos</h2>
      <ul>{labels.map(l => <li key={l.id}>{l.name}</li>)}</ul>
    </div>
  );
}

export default App;
