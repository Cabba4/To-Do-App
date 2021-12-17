import './App.css';
import Todo from "./components/Todo";

function App(props) {
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
          Add a task or mark completed tasks as done.
        </p>
        <form>
          <h2>
            <label htmlFor="input-new-todo" className="label">
              Add a to-do:
            </label>
          </h2>
          <input
              type="text"
              id="input-new-todo"
              className="input"
              name="text"
              autoComplete="off"
          />
          <button type="submit" className="button-submit">
              Add
          </button>
        </form>

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
