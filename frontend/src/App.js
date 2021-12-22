import React, {useState} from "react";
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import { nanoid } from "nanoid";

function App(props) {
    // Store and update tasks in state
    const [tasks, setTasks] = useState(props.tasks);

    // Add new task to Todo list array
    function addTaskToArray(name) {
        const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
        setTasks([...tasks, newTask]);
    }

  // Get tasks from array and turn into Todo component objects with id, name and completed
  const tasksArray = tasks.map(task => (
      <Todo
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
      />
      )
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
        <p>
          View, add and edit tasks or mark completed tasks as done.
        </p>
        <Form addNewTask={addTaskToArray} />
        <h2 id="current-tasks-heading">Current Tasks</h2>
        <ul
          role="list"
          className="todo-list"
        >
          {tasksArray}
        </ul>
      </header>
    </div>
  );
}

export default App;
