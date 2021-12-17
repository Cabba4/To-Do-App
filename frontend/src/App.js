import './App.css';
import Todo from "./components/Todo";

function App(props) {
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
          <Todo name="Task 0" completed={true} id="todo-0"/>
          <Todo name="Task 1" completed={false} id="todo-1"/>
          <Todo name="Task 2" completed={false} id="todo-2"/>
        </ul>
      </header>
    </div>
  );
}

export default App;
