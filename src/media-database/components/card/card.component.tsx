import React from 'react';

import { ICard } from '../../interfaces';
import './card.component.scss';

function Card(props: ICard) {
  return (
    <div className="movie-card">
      <div className="img-container">
        {/* @todo DO NOT FORGET TO ADD IMG PATH TO OBJECTS FROM THE NODE SCRIPT */}
        <img src={require('../../../assets/not-found.png')} alt="Image that says not found" />
        <div className="title-year-genre">
          <div className="title">{props.movie.title}</div>
          <hr />
          <div className="year">{props.movie.year}</div>
          <hr />
          <div className="genre">{props.movie.genre ? props.movie.genre : 'Genre'}</div>
        </div>
      </div>
      <hr />
      <div className="description">{props.movie.description}</div>
    </div>
  );
}

export { Card };
