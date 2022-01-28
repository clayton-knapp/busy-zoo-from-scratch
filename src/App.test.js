import { render, screen } from '@testing-library/react';
import App from './App';

test('finds word Aquarium', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aquarium/i);
  expect(linkElement).toBeInTheDocument();
});
