import React from "react";

export default function Todo() {
    return (
        <li className="todo">
            <div>
                <input id="todo-0" type="checkbox" defaultChecked={true}/>
                <label className="todo-label" htmlFor="todo-0">
                    Task 0
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
