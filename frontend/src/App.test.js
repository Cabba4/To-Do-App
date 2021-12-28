import {render, screen} from '@testing-library/react';
import App from './App';

test('renders first heading as "To-do List"', () => {
  render(<App/>);
  const headingText = screen.getByRole('heading', {level: 1});
  expect(headingText).toHaveTextContent('To-do List');
});

test('renders button to add task', () => {
  const result = render(<App/>);
  const buttonElement = result.container.querySelector(".button-submit");
  expect(buttonElement).toBeInTheDocument();
});

test('renders two headings', () => {
 render(<App />);
    expect(screen.getAllByRole('heading')).toHaveLength(2);
});

test('renders second heading as "Current Tasks"', () => {
    render(<App />);
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('Current Tasks');
});

test('renders input textbox for submission form', () => {
    render(<App/>);
    const listItem = screen.getByRole('textbox');
    expect(listItem).toBeInTheDocument();
});
