import { render, screen } from '@testing-library/react';
import Coureses from './Courses';


test('renders learn react link', () => {
  render(<Coureses />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
