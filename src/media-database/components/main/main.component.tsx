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
  const [shows, setShows] = useState(availableMedia.getValue().televisionShows);

  // movies, music, televisionShows, games - (['Movies', 'Music', 'Television Shows', 'Video Games']);
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
          map((media) =>
            media.filter((type: any) => {
              if (Object.keys(type).length === 1) {
                for (const key in type) {
                  if (Object.prototype.hasOwnProperty.call(type, key)) {
                    return key.toLowerCase().includes(filtered.toLowerCase());
                  }
                }
              }
              return (
                type?.title?.toLowerCase().includes(filtered.toLowerCase()) ||
                type?.year?.toLowerCase().includes(filtered.toLowerCase())
              );
            })
          )
        )
        .subscribe({
          next: (filteredMedia) => {
            if (props.selected === 'Movies') setMovies(filteredMedia);
            if (props.selected === 'Television Shows') setShows(filteredMedia);
          }
        });
    } else {
      setMovies(mock.movies);
      setShows(mock.televisionShows);
    }
  }, [filtered]);

  return (
    <section className="main-container-section">
      <div className="main-container">
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
