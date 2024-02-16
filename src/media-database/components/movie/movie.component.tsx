import React from 'react';

import './movie.component.scss';
import { IMovie } from '../../interfaces';
import { Card } from '..';

function Movie(props: IMovie) {
  return (
    <section className="movie-container">
      <div className="movie">
        <Card movie={props.movie} />
      </div>
    </section>
  );
}

export { Movie };
