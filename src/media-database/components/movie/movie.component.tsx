import React from 'react';
import './movie.component.scss';

interface Movie {
  movie: any;
  index: number;
}

function Movie(props: Movie) {
  return (
    <section className="movie-container">
      <div className="movie">
        <div className="movie-card" key={props.index}>
          <p>
            {props.movie.title} ({props.movie.year})
          </p>
          <br />
        </div>
      </div>
    </section>
  );
}

export { Movie };
