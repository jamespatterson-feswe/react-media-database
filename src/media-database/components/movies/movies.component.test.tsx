import { render } from '@testing-library/react';
import { Movies } from '../index';
import React from 'react';

test('renders learn react link', () => {
  render(<Movies movies={[]} />);
});
