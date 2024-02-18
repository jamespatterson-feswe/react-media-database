import React, { useState } from 'react';
import './filter.component.scss';

function Filter() {
  const [selections] = useState(['Movie', 'Music', 'Television', 'Video Game']);
  const [selected] = useState(selections[0]);

  return (
    <div className="filter">
      <img
        src={require('../../../assets/media.png')}
        alt="Image to represent the many different media types available."
      />
      {selections.map((selection: string, index: number) => {
        return (
          <header className={selection === selected ? 'selected' : ''} key={index}>
            {selection} Database
          </header>
        );
      })}
    </div>
  );
}

export { Filter };
