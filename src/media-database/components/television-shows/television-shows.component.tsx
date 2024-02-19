import React, { useState } from 'react';

import './television-shows.component.scss';

function Television(props: any) {
  const [season, setSeason] = useState([] as any[]);

  const setTheSeasonSelected = (_show: string, _season: any) => {
    setSeason(_season);
    const showEpisodesElement = document.getElementsByClassName(`${_show}-episodes`)?.[0];
    showEpisodesElement.children[0].remove();
    const section = document.createElement('section');
    section.className = 'season-content';
    section.innerText = `${_season}`;
    showEpisodesElement.appendChild(section);
    console.log(_show, showEpisodesElement, season);
  };

  let shows: string[] = [];
  for (let index = 0, leng = props.shows.length; index < leng; index++) {
    shows = shows.concat(Object.keys(props.shows[index]));
  }

  return (
    <section className="television-shows-container">
      <div className="television-shows">
        {props.shows?.map((show: Record<string, any>, index: number) => {
          return (
            <div className="television-show-card" key={index}>
              <div className="img-container">
                <img
                  src={require('../../../assets/not-found.png')}
                  alt="Image that says not found"
                />
                <div className="title-genre-seasons">
                  <div className="title">{Object.keys(show)[0]}</div>
                  <hr />
                  <div className="genre">{'Genre'}</div>
                  <hr />
                  <div className="seasons">
                    {Object.keys(props.shows[index][Object.keys(show)[0]])?.map((season, ind) => {
                      return season !== 'desktop.ini' ? (
                        <button
                          key={ind}
                          onClick={() => {
                            setTheSeasonSelected(
                              Object.keys(show)[0],
                              props.shows[index][Object.keys(show)[0]][season]
                            );
                          }}
                          className="season-btn"
                        >
                          {season}
                        </button>
                      ) : undefined;
                    })}
                  </div>
                </div>
              </div>
              <hr />
              <div className={Object.keys(show)[0] + '-episodes'} id="episodes">
                <section className="season-content"></section>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { Television };
