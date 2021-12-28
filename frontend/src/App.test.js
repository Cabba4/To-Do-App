import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "To-do List"', () => {
  const TODO_TASKS = [
    {id: "todo-0", name:"Task 0", completed: true},
    {id: "todo-1", name:"Task 1", completed: false},
    {id: "todo-2", name:"Task 2", completed: false},
  ];

  render(<App tasks={TODO_TASKS}/>);
  const headingText = screen.getByText("To-do List");
  expect(headingText).toBeInTheDocument();
});
