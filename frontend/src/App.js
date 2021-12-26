import React, {useState, useEffect} from "react";
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import {nanoid} from "nanoid";

const apiEndpoint = "http://21wsp8pw.course.tamk.cloud/api/v1/tasks/random";
//const apiEndpoint = "http://localhost:5050/api/v1/tasks/random";

function App() {
    // Store and update tasks in state
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let newTasks = []
            for (let i = 0; i < 3; i++) {
                const result = await fetch(apiEndpoint);
                const data = await result.json();
                let name = data.message[0].what;
                const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
                newTasks.push(newTask)
            }
            setTasks([...tasks, ...newTasks]);
        }

        fetchData();
    }, []);

    // Add new task to Todo list array
    function addTaskToArray(name) {
        const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
        setTasks([...tasks, newTask]);
    }

    // Set task as complete or incomplete when checkbox is checked/unchecked
    function toggleTaskAsCompleted(id) {
        const updatedTasks = tasks.map(task => {
            // Check if id of edited task is the same as this task
            if (id === task.id) {
                // Return new task object with opposite completed state
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    // Remove task from tasks array when user deletes the task
    function removeTaskFromArray(id) {
        const updatedTasksArray = tasks.filter(task => id !== task.id);
        setTasks(updatedTasksArray);
    }

    // Get tasks from array and turn into Todo component objects with id, name and completed
    const tasksArray = tasks.map(task => (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskAsCompleted}
                deleteTask={removeTaskFromArray}
            />
        )
    );

    return (
        <div className="App">
            <header className="App-header">
                <h1>To-do List</h1>
                <p>
                    View and add tasks or mark completed tasks as done.
                </p>
                <Form addNewTask={addTaskToArray}/>
                <hr/>
                <h2 id="current-tasks-heading">Current Tasks</h2>
                    {tasksArray}
            </header>
        </div>
    );
}

export default App;
