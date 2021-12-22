import React from "react";

export default function Todo(props) {
    return (
        <li className="todo">
            <div>
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label
                    className="todo-label"
                    htmlFor={props.id}
                    style={{textDecoration: props.completed ? 'line-through' : 'none'}}
                >
                    {props.name}
                </label>
            </div>
            <div>
                <button type="button" className="button">
                    Edit <span className="visually-hidden">Task 0</span>
                </button>
                <button
                    type="button"
                    className="button"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
}
