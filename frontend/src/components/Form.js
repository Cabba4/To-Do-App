import React, {useState} from "react";

export default function Form(props) {
    // For name state, set initial state to empty string, create setName function to update name state
    const [name, setName] = useState('');

    // Handle submitting form data from user
    function handleFormSubmit(e) {
        e.preventDefault();
        props.addNewTask("Going to add new task!"); // debugging
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>
                <label htmlFor="input-new-todo" className="label">
                    Add a task:
                </label>
            </h2>
            <input
                type="text"
                id="input-new-todo"
                className="input"
                name="text"
                autoComplete="off"
                value={name}
            />
            <button type="submit" className="button-submit">
                Add task
            </button>
        </form>
    );
}
