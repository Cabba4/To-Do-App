import React, {useState} from "react";

export default function Form(props) {
    // For name state, set initial state to empty string, create setName function to update name state
    const [name, setName] = useState('');

    // Event listener to handle change in input field when user types task
    function handleInputChange(e) {
        // Update name state to match typed text (value) from input field (target)
        setName(e.target.value);
    }

    // Handle submitting form data from user
    function handleFormSubmit(e) {
        e.preventDefault();
        if (name !== "") {
            props.addNewTask(name);
        }
        setName(""); // Clear input after submission
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                id="input-new-todo"
                className="input"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />
            <button type="submit" className="button-submit">
                Add task
            </button>
        </form>
    );
}
