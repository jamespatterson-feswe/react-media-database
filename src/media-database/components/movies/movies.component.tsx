import React from 'react';

import './movies.component.scss';
import { IMovies, Movie } from '../../interfaces';
import { Movie as MovieComp } from '../movie/movie.component';

function Movies(props: IMovies) {
  return (
    <section className="movies-container">
      <div className="movies">
        {props.movies?.map((movie: Movie, index: number) => {
          return <MovieComp movie={movie} key={index} />;
        })}
      </div>
    </section>
  );
}

export { Movies };
