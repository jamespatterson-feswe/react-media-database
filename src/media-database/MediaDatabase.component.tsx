import React, { useState } from 'react';
import './mediaDatabase.component.scss';
import { Header, Footer } from './components/index';
import { default as mock } from './mock/media.json';

function MediaDatabase() {
  const [media] = useState(mock);

  return (
    <div>
      <Header />
      {
        media?.movies?.map((movie, index) => {
          return (
            <div key={index}>
              <p>{ movie.title }</p>
              <p>{ movie.description }</p>
              <p>{ movie.year }</p>
              <p>{ movie.genre }</p>
            </div>
          );
        })
      } 
      <br />
      <Footer />
    </div>
  );
}

export { MediaDatabase };
