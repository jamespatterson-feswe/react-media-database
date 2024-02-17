import React from 'react';

import './movie.component.scss';
import { IMovie } from '../../interfaces';
import { Card } from '..';

function Movie(props: IMovie) {
  return <Card movie={props.movie} />;
}

export { Movie };
