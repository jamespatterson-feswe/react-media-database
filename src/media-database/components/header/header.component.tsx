import React from 'react';

import './header.component.scss';

function Header(props: { selected: string; setSelected: Function }) {
  props.setSelected(props.selected);

  const initiateSearch = () => {
    console.log('user wants to search');
  };

  const changeMediaSelection = () => {
    console.log('change the media selection');
  };

  return (
    <section className="header-container">
      <div className="container">
        <div className="header">
          {[props.selected, ' Database'].map((word: string, index: number) => {
            return (
              <span
                onClick={index < 1 ? () => changeMediaSelection() : () => {}}
                className={index < 1 ? 'first-word' : ''}
                key={index}
              >
                {word}
              </span>
            );
          })}
        </div>
        <svg
          className="search-icon"
          onClick={initiateSearch}
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path
            d="M792-120.667 532.667-380q-30 25.333-69.64 39.666Q423.388-326 378.667-326q-108.441 0-183.554-75.167Q120-476.333 120-583.333T195.167-765.5q75.166-75.167 182.5-75.167 107.333 0 182.166 75.167 74.834 75.167 74.834 182.267 0 43.233-14 82.9-14 39.666-40.667 73l260 258.667-48 47.999ZM378-392.666q79.167 0 134.583-55.834Q568-504.333 568-583.333q0-79.001-55.417-134.834Q457.167-774 378-774q-79.722 0-135.528 55.833t-55.806 134.834q0 79 55.806 134.833Q298.278-392.666 378-392.666Z"
            fill="rgba(255, 255, 255)"
          />
        </svg>
      </div>
    </section>
  );
}

export { Header };
