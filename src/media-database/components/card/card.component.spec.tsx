import { render } from '@testing-library/react';
import { Card } from '../index';
import { Movie } from '../../interfaces';
import React from 'react';

const movie = { title: 'title', year: '1234' } as unknown as Movie;

test('renders learn react link', () => {
  render(<Card movie={movie} />);
});
