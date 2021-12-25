import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const apiEndpoint = "http://21wsp8pw.course.tamk.cloud/api/v1/tasks/random";
const apiEndpoint = "http://localhost:5050/api/v1/tasks/random";

let todoTasks = [];

async function fetchEndpointPromise(endpoint) {
    const result = await fetch(endpoint);
    return await result.json();
}

function fetchTodoPromise(endpoint) {
    return Promise.resolve(fetchEndpointPromise(endpoint).then(data => {
        let todoObject = data.message[0];
        return todoObject[Object.keys(todoObject)[0]];
    }));
}

function updateTodoTasks() {
    todoTasks.forEach(todo => {
        fetchTodoPromise(apiEndpoint).then(todoName =>
            todo.name = todoName
        );
    })

    console.log("Updated todoTasks to: ", todoTasks)
}

// updateTodoTasks();

ReactDOM.render(
    <React.StrictMode>
        <App tasks={todoTasks}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
