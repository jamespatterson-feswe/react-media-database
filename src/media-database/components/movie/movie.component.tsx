import React from 'react';
import './movie.component.scss';

interface Movie {
  movie: any;
}

function Movie(props: Movie) {
  return (
    <section className="movie-container">
      <div className="movie">
        <div className="movie-card">
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
