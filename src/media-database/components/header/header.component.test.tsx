import { render } from '@testing-library/react';
import { Header } from '../index';
import React from 'react';

test('renders learn react link', () => {
  render(<Header selected={''} setSelected={() => {}} />);
});
