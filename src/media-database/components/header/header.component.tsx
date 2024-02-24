import React from 'react';

import './header.component.scss';

interface IHeader {
  selected: string;
  setSelected: Function;
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

function Header(props: IHeader) {
  return (
    <section className="header-container">
      <div className="container">
        <div className="header">
          {[props.selected, ' Database'].map((word: string, index: number) => {
            return (
              <span className={index < 1 ? 'first-word' : ''} key={index}>
                {word}
              </span>
            );
          })}
        </div>
        <img
          className="search-icon"
          onClick={() => {
            props.setIsModalOpen(true);
          }}
          height="40"
          width="40"
          src={require('../../../assets/request.png')}
          alt="Image to represent a user can request a media type."
        />
      </div>
    </section>
  );
}

export { Header };
