import React from 'react';

import { ICard } from '../../interfaces';
import './card.component.scss';

function Card(props: ICard) {
  return (
    <div className="movie-card">
      <div className='card-header'>
        {props.movie.title}
      </div>
      <hr />
      <div>
        {props.movie.year} - {props.movie.genre}
      </div>
      <hr />
      <div>
        {props.movie.description}
      </div>
      <hr />
      {/* <img
        src={require('../../../assets/not-found.png')}
        alt="Image that says not found"
      /> */}
      <br />
    </div>
  );
}

export { Card };
