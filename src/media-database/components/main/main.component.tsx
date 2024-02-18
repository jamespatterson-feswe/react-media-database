import React, { useState } from 'react';

import { default as mock } from '../../mock/media.json';
import { Movies, Filter } from '../index';
import './main.component.scss';

interface IMain {
  selections: string[];
  selected: string;
  setSelected: Function;
}

function Main(props: IMain) {
  const [media] = useState(mock);

  return (
    <section className="main-container">
      <div className="container">
        <div className="filter-section">
          <Filter
            selections={props.selections}
            selected={props.selected}
            setSelected={props.setSelected}
          />
        </div>
        <div className="movies-section">
          <Movies movies={media.movies} />
        </div>
      </div>
    </section>
  );
}

export { Main };
