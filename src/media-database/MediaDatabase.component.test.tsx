import { render, screen } from '@testing-library/react';
import { MediaDatabase } from './index';
import React from 'react';

test('renders learn react link', () => {
  render(<MediaDatabase />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
