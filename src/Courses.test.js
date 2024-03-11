import { render, screen } from '@testing-library/react';
import Courses from './Courses';


test('renders learn react link', () => {
  render(<Courses />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
