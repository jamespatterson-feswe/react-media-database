import React, { useEffect, useState } from 'react';

import { default as mock } from '../../mock/media.json';
import { Movies, Filter } from '../index';
import './main.component.scss';
import { BehaviorSubject, debounceTime, map, pluck } from 'rxjs';
import { Television } from '../television-shows/television-shows.component';

interface IMain {
  selections: string[];
  selected: string;
  setSelected: Function;
}

function Main(props: IMain) {
  const availableMedia: BehaviorSubject<any> = new BehaviorSubject<any>(mock);
  const [filtered, setFiltered] = useState('');
  const [movies, setMovies] = useState(availableMedia.getValue().movies);
  const [shows] = useState(availableMedia.getValue().televisionShows);

  // movies, music, televisionShows, games
  // (['Movies', 'Music', 'Television Shows', 'Video Games']);
  useEffect(() => {
    if (filtered.length) {
      availableMedia
        .pipe(
          debounceTime(500),
          pluck(
            props.selected === 'Movies'
              ? 'movies'
              : props.selected === 'Television Shows'
                ? 'televisionShows'
                : ''
          ),
          map((movies) =>
            movies.filter(
              (movie: any) =>
                movie?.title?.toLowerCase().includes(filtered.toLowerCase()) ||
                movie?.year?.toLowerCase().includes(filtered.toLowerCase())
            )
          )
        )
        .subscribe({
          next: (movies) => {
            setMovies(movies);
          }
        });
    } else {
      setMovies(mock.movies);
    }
  }, [filtered]);

  return (
    <section className="main-container">
      <div className="container">
        <div className="filter-section">
          <Filter
            filtered={filtered}
            setFiltered={setFiltered}
            selections={props.selections}
            selected={props.selected}
            setSelected={props.setSelected}
          />
        </div>
        <div className="media-section">
          {props.selected === 'Movies' ? (
            <Movies movies={movies} />
          ) : props.selected === 'Television Shows' ? (
            <Television shows={shows} />
          ) : undefined}
        </div>
      </div>
    </section>
  );
}

export { Main };
