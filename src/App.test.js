import { render, screen } from '@testing-library/react';
import App from './App';

test('renders default page', () => {
  render(<App />);
  const linkElement = screen.getByText('LOADING . . .');
  expect(linkElement).toBeInTheDocument();
});
