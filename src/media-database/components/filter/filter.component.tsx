import React from 'react';
import './filter.component.scss';

interface IFilter {
  filtered: string;
  setFiltered: Function;
  selections: string[];
  selected: string;
  setSelected: Function;
}

function Filter(props: IFilter) {
  return (
    <div className="filter-container">
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
                if (props.selections[index] !== props.selected) {
                  props.setSelected(props.selections[index]);
                  props.setFiltered('');
                }
              }}
            >
              {selection}
            </span>
          );
        })}
      </div>
      <hr />
      <div className="input-container">
        <input
          onChange={(event) => {
            props.setFiltered(event.target.value);
          }}
          type="search"
          id="filtered"
          name="filtered"
          placeholder={'Filter ' + props.selected}
        />
      </div>
    </div>
  );
}

export { Filter };
