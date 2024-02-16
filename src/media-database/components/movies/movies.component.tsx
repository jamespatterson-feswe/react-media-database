import React from 'react';
import { Movie } from '../index';
import './movies.component.scss';

interface Movies {
  movies: any[];
}

function Movies(props: Movies) {
  console.log(props.movies);
  return (
    <section className="movies-container">
      <div className="movies">
        {props.movies?.map((movie: any, index: number) => {
          return <Movie movie={movie} index={index} />;
        })}
      </div>
    </section>
  );
}

export { Movies };
