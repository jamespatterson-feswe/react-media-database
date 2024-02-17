import React from 'react';

import { ICard } from '../../interfaces';
import './card.component.scss';

function Card(props: ICard) {
  console.log(props);
  return (
    <div className="movie-card">
      {/* IMG AND BASIC INFORMATION CONTAINER */}
      <div className='img-container'>
        {/* DO NOT FORGET TO ADD IMG PATH TO OBJECTS FROM THE NODE SCRIPT */}
        <img
          src={require('../../../assets/not-found.png')}
          alt="Image that says not found" />
        <div className='title-year-genre'>
          {/* TITLE SECTION */}
          <div className='title'>
            {props.movie.title}
          </div>
          <hr />
          {/* YEAR SECTION */}
          <div className='year'>
            {props.movie.year}
          </div>
          <hr />
          {/* GENRE SECTION */}
          <div className='genre'>
            { props.movie.genre ? props.movie.genre : 'Genre' }
          </div>
        </div>
      </div>
      <hr />
      {/* DESCRIPTION SECTION */}
      <div className='description'>
        {props.movie.description}
      </div>
      <hr />
    </div>
  );
}

export { Card };
