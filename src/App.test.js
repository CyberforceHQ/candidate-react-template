import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
});

test('renders app with iframe', () => {
  render(<App />);
  const iframe = screen.getByTitle('Multi-Step Form');
  expect(iframe).toBeInTheDocument();
  expect(iframe).toHaveAttribute('src', '/form.html');
});

