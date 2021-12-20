import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";

function App(props) {
    // Add new task to Todo list array
    function addTaskToArray(name) {
        alert(name);
    }

  // Get tasks from array and turn into Todo component objects with id, name and completed
  const todoTasks = props.tasks?.map(task => (
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
          {todoTasks}
        </ul>
      </header>
    </div>
  );
}

export default App;
