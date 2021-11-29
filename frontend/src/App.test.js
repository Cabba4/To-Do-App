import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "To-do List"', () => {
  render(<App />);
  const linkElement = screen.getByText("To-do List");
});
