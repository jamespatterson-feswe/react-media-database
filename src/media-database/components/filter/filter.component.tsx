import React from 'react';
import './filter.component.scss';

interface IFilter {
  selections: string[];
  selected: string;
  setSelected: Function;
}

function Filter(props: IFilter) {
  return (
    <div className="filter">
      <img
        src={require('../../../assets/media.png')}
        alt="Image to represent the many different media types available."
      />
      <hr />
      {props.selections.map((selection: string, index: number) => {
        return (
          <span
            key={index}
            className={selection === props.selected ? 'selections selected' : 'selections'}
            onClick={() => {
              props.setSelected(props.selections[index]);
            }}
          >
            {selection}
          </span>
        );
      })}
      <hr />
      <label>Filter {props.selected}</label>
      <input type="text" id="fname" name="firstname" placeholder={'search by title, year, etc'} />
    </div>
  );
}

export { Filter };
