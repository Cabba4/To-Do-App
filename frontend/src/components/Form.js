import React from "react";

export default function Form() {
    return (
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
    );
}
