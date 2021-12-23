import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TODO_TASKS = [
    {id: "todo-0", name:"Go to the grocery store", completed: false},
    {id: "todo-1", name:"Read a book", completed: false},
    {id: "todo-2", name:"Bake a birthday cake", completed: false},
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={TODO_TASKS}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
