import React from "react";

export default function Todo(props) {
    return (
        <li className="todo">
            <div>
                <input id={props.id} type="checkbox" defaultChecked={props.completed}/>
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div>
                <button type="button" className="button">
                    Edit <span className="visually-hidden">Task 0</span>
                </button>
                <button type="button" className="button">
                    Delete <span className="visually-hidden">Task 0</span>
                </button>
            </div>
        </li>
    );
}
