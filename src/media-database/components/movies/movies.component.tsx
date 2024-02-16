import React from 'react';

import './movies.component.scss';
import { IMovies } from '../../interfaces'
import { Movie } from '../index';

function Movies(props: IMovies) {
  return (
    <section className="movies-container">
      <div className="movies">
        {props.movies?.map((movie: any, index: number) => {
          return <Movie movie={movie} key={index} />;
        })}
      </div>
    </section>
  );
}

export { Movies };
