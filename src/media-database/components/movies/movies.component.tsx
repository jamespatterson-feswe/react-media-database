import React from 'react';

import './movies.component.scss';
import { IMovies, Movie } from '../../interfaces';
import { Movie as MovieComp } from '../movie/movie.component';

function Movies(props: IMovies) {
  console.log(props);
  const temp = [
    {
      description: `This would be the description for the movie. I can describe the movie title I'm using but honestly I cannot remember too many details. I do know the movie follows the James gang. Robert Ford sort of idolizes Jesse. Eventually ending up coming up behind him him a gun, and ending it for Jesse James. Robert Ford was a coward.`,
      genre: 'Western',
      title: 'The Assassination of Jesse James by the Coward Robert Ford',
      year: '2010'
    },
    {
      description: `This would be a standard short description for a film like Endgame. The avengers assemble galaxy wide to bring down the titan, Thanos.`,
      genre: 'Action',
      title: 'The Avengers Endgame',
      year: '2016'
   }
  ];
  return (
    <section className="movies-container">
      <div className="movies">
        {/* {props.movies?.map((movie: Movie, index: number) => { */}
        {temp?.map((movie: Movie, index: number) => {
          return <MovieComp movie={movie} key={index} />;
        })}
      </div>
    </section>
  );
}

export { Movies };
