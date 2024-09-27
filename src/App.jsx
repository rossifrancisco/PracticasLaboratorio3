import './App.css'
import { useState } from 'react';
import TaskList from './components/taskList/TaskList';
import TaskInput from './components/taskInput/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(0)

  const addTask = (task) => {
    const newTask = { id: taskId, text: task, completed: false };
    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

