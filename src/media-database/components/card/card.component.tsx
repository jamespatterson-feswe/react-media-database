import React from 'react';

import { ICard } from '../../interfaces'
import './card.component.scss';

function Card(props: ICard) {

  return (
    <div className="movie-card">
      <p>
        {props.movie.title} ({props.movie.year})
      </p>
      <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1" 
        alt='Image that says not found' />
      <br />
    </div>
  );
}

export { Card };
