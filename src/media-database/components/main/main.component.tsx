import React, { useState } from 'react';

import { default as mock } from '../../mock/media.json';
import { Movies } from '../index';
import './main.component.scss';

function Main() {
  // const [choices] = useState(['movies', 'television show', 'video game']);
  // const [selection] = useState(choices[0]);
  const [media] = useState(mock);

  return (
    <section className="main-container">
      <div className="container">
        <div className='filter-section'>
          <div className='filter'>
            this is the filter section
          </div>
        </div>
        <div className='movies-section'>
          <Movies movies={media.movies} />
        </div>
      </div>
    </section>
  );
}

export { Main };
