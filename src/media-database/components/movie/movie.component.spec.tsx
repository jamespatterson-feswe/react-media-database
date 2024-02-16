import { render } from '@testing-library/react';
import { Movie } from '../movie/movie.component';
import React from 'react';

test('renders learn react link', () => {
  render(
    <Movie
      movie={{
        description: '',
        genre: '',
        title: '',
        year: ''
      }}
    />
  );
});
